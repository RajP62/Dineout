import {legacy_createStore} from "redux"
import { authreducer } from "./reducer/authreducer"



export const store = legacy_createStore(authreducer)


