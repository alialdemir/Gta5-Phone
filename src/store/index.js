import Vuex from 'vuex';
import appModule from './modules/app';
import phoneModule from './modules/phone';



const createStore = () => {
    return new Vuex.Store({
        namespaced: true,
        modules: {
            app: appModule,
            phone: phoneModule,
        }
    });
};

export default createStore