export default ({ $axios, store }) => {
    $axios.onError(({ response }) => {

        return true;
    });
};
