import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

const middleware = [thunk];

// const mockStore = configureMockStore(middleware);
const mock = new MockAdapter(axios);
