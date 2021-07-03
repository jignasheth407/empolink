import axios from 'axios'

require('es6-promise').polyfill();

export class APIHelper {

    static getMethod(endpoint, headers, cancelToken) {
        return axios.get(endpoint, {
            headers: headers,
            cancelToken: cancelToken
        }).then(function (response) {
            return response['data'];
        }).catch(function (error) {
            if (axios.isCancel(error)) {
                return "";
            } else {
                return '';
            }
        });
    }

    static postMethod(endpoint, payload, headers, cancelToken) {
        return axios.post(endpoint, payload, {
            headers: headers,
            type: "POST",
            cancelToken: cancelToken
        }).then(response => {
            return response['data'];
        }).catch(function (error) {
            if (axios.isCancel(error)) {
                return "";
            } else {
                return error.response['data'];
            }
        })
    }

    static putMethod(endpoint, payload, headers) {
        return axios.put(endpoint, payload, {
            headers: headers,
            type: "PUT"
        }).then(response => {
            return response['data'];
        }).catch(function (error) {
            return error.response['data'];
        })
    }

    static deleteMethod(endpoint, headers) {
        return axios.delete(endpoint, {
            headers: headers
        }).then(function (response) {
            return response['data'];
        }).catch(function (error) {
            return error.response['data'];
        });
    }
}