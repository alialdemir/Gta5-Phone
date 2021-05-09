
export default {
    async getApps({ commit }) {
        const response = await this.$axios.get('/configs/Applications.json');
        if (response) {
            commit('setApps', response.data)
        }
    },
}