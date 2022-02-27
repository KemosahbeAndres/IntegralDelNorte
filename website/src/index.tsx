import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootswatch/dist/litera/bootstrap.min.css'
import './assets/styles/main.css'
import { mount, el, RedomElement } from 'redom'
import { LMS } from './lms'

window.base64 = {
    encode : (value: string) => btoa(value),
    decode : (value: string) => atob(value)
}


const app = new LMS()

app.start()