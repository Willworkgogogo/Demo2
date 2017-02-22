package utils

import (
	"encoding/json"
	"io"
	"net/http"
	pnurl "net/url"
	"strings"
)

var (
	DefaultClient = http.Client{}
)

// Get  基础的Get方法
func Get(url string, obj interface{}, header map[string]string) error {
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		return err
	}
	for k, v := range header {
		req.Header.Add(k, v)
	}
	res, err := DefaultClient.Do(req)
	if err != nil {
		return err
	}
	defer res.Body.Close()

	return json.NewDecoder(res.Body).Decode(obj)
}

// Post  基础的Post方法
func Post(url string, obj interface{}, header, body map[string][]string) error {
	data := pnurl.Values(body)
	res, err := post(url, "application/x-www-form-urlencoded", strings.NewReader(data.Encode()), header)
	if err != nil {
		return err
	}
	defer res.Body.Close()

	return json.NewDecoder(res.Body).Decode(obj)
}
func post(url, bodyType string, body io.Reader, header map[string][]string) (resp *http.Response, err error) {
	req, err := http.NewRequest("POST", url, body)
	if err != nil {
		return nil, err
	}
	for k, v := range header {
		req.Header.Add(k, v[0])
	}
	req.Header.Set("Content-Type", bodyType)
	return DefaultClient.Do(req)
}
