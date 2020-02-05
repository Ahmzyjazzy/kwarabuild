export const state = () => ({
    counter: 0,
   appLoading: false
})

export const mutations = {
    increment(state) {
        state.counter++
    },
    showLoader(state){
        state.appLoading = !state.appLoading;
    }
}