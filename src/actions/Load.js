import axios from 'axios';
import store from "../store/store";

export function FetchData(){
 
    this.start = (AppType) => {
        axios.get(AppType)
        .then(function (response){
          // handle success
          console.log(response);
          store.dispatch({ type:"STORE_INTERACTIVE", payload:response.data });
          store.dispatch({ type:"UI_SET", payload:true });
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }
}
