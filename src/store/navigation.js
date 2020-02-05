export const state = () => ({
    drawer: false,
    items: [],
	currentPage: {}
})

export const getters = {
    links: (state) => state.items
}

export const mutations = {
    toggleDrawer: state => (state.drawer = !state.drawer)
}

export const actions = {

} 