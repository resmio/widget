const SERVER_DATA = {
  init: ()=> {
    // load mock availabilities into localStorage
    localStorage.clear();
    localStorage.setItem('availabilities', JSON.stringify([
      {
        "meta": {
          "limit": 1000,
          "next": null,
          "offset": 0,
          "previous": null,
          "total_count": 26
        },
        "objects": [
          {
            "available": 0,
            "available_authenticated": 6,
            "checksum": "78ba9cce59fbd199304dfb9af90cb27e",
            "date": "2015-07-21T08:00:00+00:00",
            "id": null,
            "local_date_formatted": "July 21, 2015, 10 a.m.",
            "local_time_formatted": "10:00 a.m.",
            "message": null,
            "price_change": 0,
            "resource_uri": "/v1/facility/the-fish/availability/1437465600"
          }, {
            "available": 0
            "available_authenticated": 6
            "checksum": "f4f41c888f2f7c2e414e430998da1e9a"
            "date": "2015-07-21T08:30:00+00:00"
            "id": null
            "local_date_formatted": "July 21, 2015, 10:30 a.m."
            "local_time_formatted": "10:30 a.m."
            "message": null
            "price_change": 0
            "resource_uri": "/v1/facility/the-fish/availability/1437467400"
          }
        ]}
      }
    ]));
  }
};

export default SERVER_DATA;
