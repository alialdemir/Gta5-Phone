
import Config from '../../../static/configs/config.json'

export default {
    async loadConfig({ commit, }) {
        commit('SET_CONFIG', Config)
        commit('setApps', Config.apps)
    },

    eventListener({ }) {
        window.onload = () => {
            window.addEventListener('message', (event) => {
                const item = event.data;
                if (item.show !== undefined) {
                    store.commit('SET_PHONE_VISIBILITY', item.show)
                }
            });
        };
    },

    setBackground({ commit }, background) {
        commit('SET_BACKGROUND', background)
    },

    forceIosTheme({ }) {
        const forceIosThemeInterval = setInterval(() => {
            const htmlClassNameExistsMd = document.getElementsByTagName('html')[0].className.indexOf(' md device-pixel-ratio-2 device-desktop');
            if (htmlClassNameExistsMd != -1) {
                clearInterval(forceIosThemeInterval);

                document.getElementsByTagName('html')[0].className =
                    'ios-translucent-bars ios-translucent-modals device-pixel-ratio-3 device-ios theme-dark ios';

                this.$f7.views[0].app.theme = 'ios';
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