import * as todoActions from "./actionType"
import axios from "axios"

const getBikesRequest = () => {
    return (
        {
            type: todoActions.GET_BIKES_REQUEST
        }
    )
}
const getBikesSuccess = (payload) => {
    return (
        {
            type: todoActions.GET_BIKES_SUCCESS,
            payload
        }
    )
}
const getHostsFailure = () => {
    return (
        {
            type: todoActions.GET_BIKES_FAILURE
        }
    )
}
const getBikes = (id='60489b1667b6df5e649d9671')=> (dispatch) => {
    dispatch(getBikesRequest())
    return axios.get(`http://localhost:8080/location/${id}/bikes`)
        .then((res) => dispatch(getBikesSuccess(res.data.data.bikes)))
        .catch((err) => dispatch(getHostsFailure()))

}
export default getBikes
