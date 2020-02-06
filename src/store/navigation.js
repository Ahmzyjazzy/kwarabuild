export const state = () => ({
    menu: false,
    items: [],
	currentPage: {}
})

export const getters = {
    links: (state) => state.items
}

export const mutations = {
    toggleMenu: state => (state.menu = !state.menu)
}

export const actions = {

} 