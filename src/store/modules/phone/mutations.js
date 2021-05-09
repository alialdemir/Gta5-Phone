export default {

    SET_BACKGROUND(state, background) {
        state.config.background_default = background;
    },

    SET_CONFIG(state, config) {
        state.config = config
    },
};