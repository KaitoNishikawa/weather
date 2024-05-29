import getInfo from './api'

export default class UI{
    static initSearch(){
        const form = document.getElementById('search-form')
        const name = document.getElementById('city-input')
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            getInfo(name.value)
        })
    }
}