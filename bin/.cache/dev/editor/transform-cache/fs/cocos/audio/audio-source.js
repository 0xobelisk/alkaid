System.register("q-bundled:///fs/cocos/audio/audio-source.js", ["pal/audio", "../core/data/decorators/index.js", "../../pal/audio/type.js", "../scene-graph/component.js", "../core/index.js", "./audio-clip.js", "./audio-manager.js"], function (_export, _context) {
  "use strict";

  var AudioPlayer, ccclass, help, menu, tooltip, type, range, serializable, AudioState, Component, clamp, AudioClip, audioManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _class3, _LOADED_EVENT, AudioSourceEventType, AudioOperationType, AudioSource;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_palAudio) {
      AudioPlayer = _palAudio.AudioPlayer;
    }, function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      help = _coreDataDecoratorsIndexJs.help;
      menu = _coreDataDecoratorsIndexJs.menu;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      type = _coreDataDecoratorsIndexJs.type;
      range = _coreDataDecoratorsIndexJs.range;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_palAudioTypeJs) {
      AudioState = _palAudioTypeJs.AudioState;
    }, function (_sceneGraphComponentJs) {
      Component = _sceneGraphComponentJs.Component;
    }, function (_coreIndexJs) {
      clamp = _coreIndexJs.clamp;
    }, function (_audioClipJs) {
      AudioClip = _audioClipJs.AudioClip;
    }, function (_audioManagerJs) {
      audioManager = _audioManagerJs.audioManager;
    }],
    execute: function () {
      _LOADED_EVENT = 'audiosource-loaded';
      (function (AudioSourceEventType) {
        AudioSourceEventType["STARTED"] = "started";
        AudioSourceEventType["ENDED"] = "ended";
      })(AudioSourceEventType || (AudioSourceEventType = {}));
      (function (AudioOperationType) {
        AudioOperationType["PLAY"] = "play";
        AudioOperationType["STOP"] = "stop";
        AudioOperationType["PAUSE"] = "pause";
        AudioOperationType["SEEK"] = "seek";
      })(AudioOperationType || (AudioOperationType = {}));
      /**
       * @en
       * A representation of a single audio source, <br>
       * contains basic functionalities like play, pause and stop.
       * @zh
       * 音频组件，代表单个音源，提供播放、暂停、停止等基本功能。
       */
      _export("AudioSource", AudioSource = (_dec = ccclass('cc.AudioSource'), _dec2 = help('i18n:cc.AudioSource'), _dec3 = menu('Audio/AudioSource'), _dec4 = type(AudioClip), _dec5 = type(AudioClip), _dec6 = tooltip('i18n:audio.clip'), _dec7 = tooltip('i18n:audio.loop'), _dec8 = tooltip('i18n:audio.playOnAwake'), _dec9 = range([0.0, 1.0]), _dec10 = tooltip('i18n:audio.volume'), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = (_class3 = class AudioSource extends Component {
        constructor(...args) {
          super(...args);
          this._clip = _initializer && _initializer();
          this._player = null;
          this._hasRegisterListener = false;
          this._loop = _initializer2 && _initializer2();
          this._playOnAwake = _initializer3 && _initializer3();
          this._volume = _initializer4 && _initializer4();
          this._cachedCurrentTime = -1;
          // An operation queue to store the operations before loading the AudioPlayer.
          this._operationsBeforeLoading = [];
          this._isLoaded = false;
          this._lastSetClip = null;
        }
        static get maxAudioChannel() {
          return AudioPlayer.maxAudioChannel;
        }
        _resetPlayer() {
          if (this._player) {
            audioManager.removePlaying(this._player);
            this._unregisterListener();
            this._player.destroy();
            this._player = null;
          }
        }
        /**
         * @en
         * The default AudioClip to be played for this audio source.
         * @zh
         * 设定要播放的音频。
         */
        set clip(val) {
          if (val === this._clip) {
            return;
          }
          this._clip = val;
          this._syncPlayer();
        }
        get clip() {
          return this._clip;
        }
        _syncPlayer() {
          const clip = this._clip;
          if (this._lastSetClip === clip) {
            return;
          }
          if (!clip) {
            this._lastSetClip = null;
            this._resetPlayer();
            return;
          }
          if (!clip._nativeAsset) {
            // eslint-disable-next-line no-console
            console.error('Invalid audio clip');
            return;
          }
          // The state of _isloaded cannot be modified if clip is the wrong argument.
          // Because load is an asynchronous function, if it is called multiple times with the same arguments.
          // It may cause an illegal state change
          this._isLoaded = false;
          this._lastSetClip = clip;
          this._operationsBeforeLoading.length = 0;
          AudioPlayer.load(clip._nativeAsset.url, {
            audioLoadMode: clip.loadMode
          }).then(player => {
            var _this$node;
            if (this._lastSetClip !== clip) {
              // In case the developers set AudioSource.clip concurrently,
              // we should choose the last one player of AudioClip set to AudioSource.clip
              // instead of the last loaded one.
              player.destroy();
              return;
            }
            this._isLoaded = true;
            // clear old player
            this._resetPlayer();
            this._player = player;
            this._syncStates();
            (_this$node = this.node) === null || _this$node === void 0 ? void 0 : _this$node.emit(_LOADED_EVENT);
            // eslint-disable-next-line @typescript-eslint/no-empty-function
          }).catch(e => {});
        }
        _registerListener() {
          if (!this._hasRegisterListener && this._player) {
            const player = this._player;
            player.onEnded(() => {
              var _this$node2;
              audioManager.removePlaying(player);
              (_this$node2 = this.node) === null || _this$node2 === void 0 ? void 0 : _this$node2.emit(AudioSourceEventType.ENDED, this);
            });
            player.onInterruptionBegin(() => {
              audioManager.removePlaying(player);
            });
            player.onInterruptionEnd(() => {
              if (this._player === player) {
                audioManager.addPlaying(player);
              }
            });
            this._hasRegisterListener = true;
          }
        }
        _unregisterListener() {
          if (this._player && this._hasRegisterListener) {
            this._player.offEnded();
            this._player.offInterruptionBegin();
            this._player.offInterruptionEnd();
            this._hasRegisterListener = false;
          }
        }

        /**
         * @en
         * Is looping enabled for this audio source?
         * @zh
         * 是否循环播放音频？
         */
        set loop(val) {
          this._loop = val;
          if (this._player) {
            this._player.loop = val;
          }
        }
        get loop() {
          return this._loop;
        }

        /**
         * @en
         * Is the autoplay enabled? <br>
         * Note that for most platform autoplay will only start <br>
         * after a user gesture is received, according to the latest autoplay policy: <br>
         * https://www.chromium.org/audio-video/autoplay
         * @zh
         * 是否启用自动播放。 <br>
         * 请注意，根据最新的自动播放策略，现在对大多数平台，自动播放只会在第一次收到用户输入后生效。 <br>
         * 参考：https://www.chromium.org/audio-video/autoplay
         */
        set playOnAwake(val) {
          this._playOnAwake = val;
        }
        get playOnAwake() {
          return this._playOnAwake;
        }

        /**
         * @en
         * The volume of this audio source (0.0 to 1.0).<br>
         * Note: Volume control may be ineffective on some platforms.
         * @zh
         * 音频的音量（大小范围为 0.0 到 1.0）。<br>
         * 请注意，在某些平台上，音量控制可能不起效。<br>
         */
        set volume(val) {
          // eslint-disable-next-line no-console
          if (Number.isNaN(val)) {
            console.warn('illegal audio volume!');
            return;
          }
          val = clamp(val, 0, 1);
          if (this._player) {
            this._player.volume = val;
            this._volume = this._player.volume;
          } else {
            this._volume = val;
          }
        }
        get volume() {
          return this._volume;
        }
        onLoad() {
          this._syncPlayer();
        }
        onEnable() {
          // audio source component may be played before
          if (this._playOnAwake && !this.playing) {
            this.play();
          }
        }
        onDisable() {
          const rootNode = this._getRootNode();
          if (rootNode !== null && rootNode !== void 0 && rootNode._persistNode) {
            return;
          }
          this.pause();
        }
        onDestroy() {
          this.stop();
          this.clip = null; // It will trigger _syncPlayer then call resetPlayer
        }
        /**
         * @en
         * Get PCM data from specified channel.
         * Currently it is only available in Native platform and Web Audio (including Web and ByteDance platforms).
         *
         * @zh
         * 通过指定的通道获取音频的 PCM data。
         * 目前仅在原生平台和 Web Audio（包括 Web 和 字节平台）中可用。
         *
         * @param channelIndex The channel index. 0 is left channel, 1 is right channel.
         * @returns A Promise to get the PCM data after audio is loaded.
         *
         * @example
         * ```ts
         * audioSource.getPCMData(0).then(dataView => {
         *   if (!dataView)  return;
         *   for (let i = 0; i < dataView.length; ++i) {
         *     console.log('data: ' + dataView.getData(i));
         *   }
         * });
         * ```
         */
        getPCMData(channelIndex) {
          return new Promise(resolve => {
            if (channelIndex !== 0 && channelIndex !== 1) {
              // eslint-disable-next-line no-console
              console.warn('Only support channel index 0 or 1 to get buffer');
              resolve(undefined);
              return;
            }
            if (this._player) {
              resolve(this._player.getPCMData(channelIndex));
            } else {
              var _this$node3;
              (_this$node3 = this.node) === null || _this$node3 === void 0 ? void 0 : _this$node3.once(_LOADED_EVENT, () => {
                var _this$_player;
                resolve((_this$_player = this._player) === null || _this$_player === void 0 ? void 0 : _this$_player.getPCMData(channelIndex));
              });
            }
          });
        }

        /**
         * @en
         * Get the sample rate of audio.
         * Currently it is only available in Native platform and Web Audio (including Web and ByteDance platforms).
         *
         * @zh
         * 获取音频的采样率。
         * 目前仅在原生平台和 Web Audio（包括 Web 和 字节平台）中可用。
         *
         * @returns A Promise to get the sample rate after audio is loaded.
         */
        getSampleRate() {
          return new Promise(resolve => {
            if (this._player) {
              resolve(this._player.sampleRate);
            } else {
              var _this$node4;
              (_this$node4 = this.node) === null || _this$node4 === void 0 ? void 0 : _this$node4.once(_LOADED_EVENT, () => {
                resolve(this._player.sampleRate);
              });
            }
          });
        }
        _getRootNode() {
          var _currentNode, _currentNode$parent;
          let currentNode = this.node;
          let currentGrandparentNode = (_currentNode = currentNode) === null || _currentNode === void 0 ? void 0 : (_currentNode$parent = _currentNode.parent) === null || _currentNode$parent === void 0 ? void 0 : _currentNode$parent.parent;
          while (currentGrandparentNode) {
            var _currentNode2, _currentNode3, _currentNode3$parent;
            currentNode = (_currentNode2 = currentNode) === null || _currentNode2 === void 0 ? void 0 : _currentNode2.parent;
            currentGrandparentNode = (_currentNode3 = currentNode) === null || _currentNode3 === void 0 ? void 0 : (_currentNode3$parent = _currentNode3.parent) === null || _currentNode3$parent === void 0 ? void 0 : _currentNode3$parent.parent;
          }
          return currentNode;
        }

        /**
         * @en
         * Play the clip.<br>
         * Restart if already playing.<br>
         * Resume if paused.
         *
         * NOTE: On Web platforms, the Auto Play Policy bans auto playing audios at the first time, because the user gesture is required.
         * there are 2 ways to play audios at the first time:
         * - play audios in the callback of TOUCH_END or MOUSE_UP event
         * - play audios straightly, the engine will auto play audios at the next user gesture.
         *
         * @zh
         * 开始播放。<br>
         * 如果音频处于正在播放状态，将会重新开始播放音频。<br>
         * 如果音频处于暂停状态，则会继续播放音频。
         *
         * 注意:在 Web 平台，Auto Play Policy 禁止首次自动播放音频，因为需要发生用户交互之后才能播放音频。
         * 有两种方式实现音频首次自动播放：
         * - 在 TOUCH_END 或者 MOUSE_UP 的事件回调里播放音频。
         * - 直接播放音频，引擎会在下一次发生用户交互时自动播放。
         */
        play() {
          if (!this._isLoaded && this.clip) {
            this._operationsBeforeLoading.push({
              op: AudioOperationType.PLAY,
              params: null
            });
            return;
          }
          this._registerListener();
          audioManager.discardOnePlayingIfNeeded();
          // Replay if the audio is playing
          if (this.state === AudioState.PLAYING) {
            var _this$_player2;
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            (_this$_player2 = this._player) === null || _this$_player2 === void 0 ? void 0 : _this$_player2.stop().catch(e => {});
          }
          const player = this._player;
          if (player) {
            player.play().then(() => {
              var _this$node5;
              (_this$node5 = this.node) === null || _this$node5 === void 0 ? void 0 : _this$node5.emit(AudioSourceEventType.STARTED, this);
            }).catch(e => {
              audioManager.removePlaying(player);
            });
            audioManager.addPlaying(player);
          }
        }

        /**
         * @en
         * Pause the clip.
         * @zh
         * 暂停播放。
         */
        pause() {
          var _this$_player3;
          if (!this._isLoaded && this.clip) {
            this._operationsBeforeLoading.push({
              op: AudioOperationType.PAUSE,
              params: null
            });
            return;
          }
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          (_this$_player3 = this._player) === null || _this$_player3 === void 0 ? void 0 : _this$_player3.pause().catch(e => {});
        }

        /**
         * @en
         * Stop the clip.
         * @zh
         * 停止播放。
         */
        stop() {
          if (!this._isLoaded && this.clip) {
            this._operationsBeforeLoading.push({
              op: AudioOperationType.STOP,
              params: null
            });
            return;
          }
          if (this._player) {
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            this._player.stop().catch(e => {});
            audioManager.removePlaying(this._player);
          }
        }

        /**
         * @en
         * Plays an AudioClip, and scales volume by volumeScale. The result volume is `audioSource.volume * volumeScale`. <br>
         * @zh
         * 以指定音量倍数播放一个音频一次。最终播放的音量为 `audioSource.volume * volumeScale`。 <br>
         * @param clip The audio clip to be played.
         * @param volumeScale volume scaling factor wrt. current value.
         */
        playOneShot(clip, volumeScale = 1) {
          if (!clip._nativeAsset) {
            // eslint-disable-next-line no-console
            console.error('Invalid audio clip');
            return;
          }
          let player;
          AudioPlayer.loadOneShotAudio(clip._nativeAsset.url, this._volume * volumeScale, {
            audioLoadMode: clip.loadMode
          }).then(oneShotAudio => {
            player = oneShotAudio;
            audioManager.discardOnePlayingIfNeeded();
            oneShotAudio.onEnd = () => {
              audioManager.removePlaying(oneShotAudio);
            };
            oneShotAudio.play();
            audioManager.addPlaying(oneShotAudio);
          }).catch(e => {
            if (player) {
              audioManager.removePlaying(player);
            }
          });
        }
        _syncStates() {
          if (this._player) {
            this._player.loop = this._loop;
            this._player.volume = this._volume;
            this._operationsBeforeLoading.forEach(opInfo => {
              if (opInfo.op === AudioOperationType.SEEK) {
                this._cachedCurrentTime = opInfo.params && opInfo.params[0];
                if (this._player) {
                  // eslint-disable-next-line @typescript-eslint/no-empty-function
                  this._player.seek(this._cachedCurrentTime).catch(e => {});
                }
              } else {
                var _this$opInfo$op;
                (_this$opInfo$op = this[opInfo.op]) === null || _this$opInfo$op === void 0 ? void 0 : _this$opInfo$op.call(this);
              }
            });
            this._operationsBeforeLoading.length = 0;
          }
        }

        /**
         * @en
         * Set current playback time, in seconds.
         * @zh
         * 以秒为单位设置当前播放时间。
         * @param num playback time to jump to.
         */
        set currentTime(num) {
          var _this$_player4;
          // eslint-disable-next-line no-console
          if (Number.isNaN(num)) {
            console.warn('illegal audio time!');
            return;
          }
          num = clamp(num, 0, this.duration);
          if (!this._isLoaded && this.clip) {
            this._operationsBeforeLoading.push({
              op: AudioOperationType.SEEK,
              params: [num]
            });
            return;
          }
          this._cachedCurrentTime = num;
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          (_this$_player4 = this._player) === null || _this$_player4 === void 0 ? void 0 : _this$_player4.seek(this._cachedCurrentTime).catch(e => {});
        }

        /**
         * @en
         * Get the current playback time, in seconds.
         * @zh
         * 以秒为单位获取当前播放时间。
         */
        get currentTime() {
          return this._player ? this._player.currentTime : this._cachedCurrentTime < 0 ? 0 : this._cachedCurrentTime;
        }

        /**
         * @en
         * Get the audio duration, in seconds.
         * @zh
         * 获取以秒为单位的音频总时长。
         */
        get duration() {
          var _this$_clip$getDurati, _this$_clip;
          return (_this$_clip$getDurati = (_this$_clip = this._clip) === null || _this$_clip === void 0 ? void 0 : _this$_clip.getDuration()) !== null && _this$_clip$getDurati !== void 0 ? _this$_clip$getDurati : this._player ? this._player.duration : 0;
        }

        /**
         * @en
         * Get current audio state.
         * @zh
         * 获取当前音频状态。
         */
        get state() {
          return this._player ? this._player.state : AudioState.INIT;
        }

        /**
         * @en
         * Is the audio currently playing?
         * @zh
         * 当前音频是否正在播放？
         */
        get playing() {
          return this.state === AudioSource.AudioState.PLAYING;
        }
      }, _class3.AudioState = AudioState, _class3.EventType = AudioSourceEventType, _class3), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_clip", [_dec4], function () {
        return null;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_loop", [serializable], function () {
        return false;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_playOnAwake", [serializable], function () {
        return true;
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "_volume", [serializable], function () {
        return 1;
      }), _applyDecoratedDescriptor(_class2.prototype, "clip", [_dec5, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "clip"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "loop", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "loop"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "playOnAwake", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "playOnAwake"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "volume", [_dec9, _dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "volume"), _class2.prototype)), _class2)) || _class) || _class) || _class));
    }
  };
});