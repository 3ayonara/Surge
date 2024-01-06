/*******************************

[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/3ayonara/Surge/main/Scripts/NotBoring/NotBoring.js
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/3ayonara/Surge/main/Scripts/NotBoring/NotBoring.js
^https:\/\/app-measurement\.com\/config\/app\/.+ url reject

[mitm]
hostname = api.revenuecat.com, app-measurement.com

*******************************/

const chxm1023 = {};
const chxm1024 = JSON.parse(typeof $response != "undefined" && $response.body || null);

const name = "patron";
const appid = "com.andyworks.chxm1023.yearlyPatron";

  
if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  chxm1023.headers = $request.headers;
} else if (chxm1024 && chxm1024.subscriber) {
  data = {
 "Author": "chxm1023",
 "original_purchase_date": "2022-09-09T09:09:09Z",
 "purchase_date": "2022-09-09T09:09:09Z",
 "expires_date": "2099-09-09T09:09:09Z",
 "store" : "app_store",
 "ownership_type": "PURCHASED"
 };
  chxm1024.subscriber.subscriptions[(appid)] = data
  chxm1024.subscriber.entitlements[(name)] = JSON.parse(JSON.stringify(data));
  chxm1024.subscriber.entitlements[(name)].product_identifier = (appid);
  chxm1023.body = JSON.stringify(chxm1024);
}

$done(chxm1023);