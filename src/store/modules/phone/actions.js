
import Config from '../../../static/configs/config.json'

export default {
    async loadConfig({ commit, }) {
        commit('SET_CONFIG', Config)
        commit('setApps', Config.apps)
    },

    eventListener({ dispatch, commit }) {
        window.onload = () => {
            window.addEventListener('message', (event) => {
                const item = event.data;
                if (item.dispatch !== undefined) {
                    dispatch(item.dispatch, item.data)
                }
                else if (item.commit !== undefined) {
                    commit(item.commit, item.data)
                }
            });
        };
    },

    setBackground({ commit }, background) {
        commit('SET_BACKGROUND', background)
    },

    forceIosTheme({ }) {
        const forceIosThemeInterval = setInterval(() => {
            const darkModeClassNames = 'ios-translucent-bars ios-translucent-modals device-pixel-ratio-3 device-ios theme-dark ios';
            const htmlElement = document.getElementsByTagName('html')[0];

            if (htmlElement.className.indexOf(darkModeClassNames) === -1) {
                clearInterval(forceIosThemeInterval);

                htmlElement.className = (darkModeClassNames);

                //  this.$f7.views[0].app.theme = 'ios';
            }
        }, 100);
    },


    playSound({ state }, { sound, volume = 1, loop = true }) {
        if (!sound) {
            return;
        }

        state.soundList[sound] = new Audio(sound)
        state.soundList[sound].loop = loop;
        state.soundList[sound].volume = volume;
        state.soundList[sound].play();
    },

    setSoundVolume({ sound, volume = 1 }) {
        if (state.soundList[sound] !== undefined) {
            state.soundList[sound].volume = volume
        }
    },

    stopSound({ state }, { sound }) {
        if (state.soundList[sound] !== undefined) {
            state.soundList[sound].pause()
            delete state.soundList[sound]
        }
    },
}