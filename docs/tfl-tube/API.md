---
sidebar_position: 2
---

# API Reference (Work in Progress)

:::info
Base URL: https://tube.okis.dev
:::

## Line

### Get Specific Line

**Endpoint:** /api/line/search

**Description:** Use this endpoint to search for a specific line by line name or line id.

**HTTP Method:** `GET`

**Request Parameters:**

| Parameter | Type   | Required                           | Description                     |
| --------- | ------ | ---------------------------------- | ------------------------------- |
| `line`    | string | YES (`line` or `id` must have one) | The name of the line to search. |
| `id`      | string | YES (`line` or `id` must have one) | The ID of the line to search.   |

**Response Format:**

The API will return a JSON object containing an array of line objects that match the search criteria. Each line object will include the following fields:

| Field | Type | Description |
| ----- | ---- | ----------- |
|       |      |             |
|       |      |             |

**Example Request:**

`GET https://tube.okis.dev/api/line/search?id=bakerloo`

**Example Response:**

```json
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": "bakerloo",
    "name": "Bakerloo",
    "mode": "tube",
    "checked": false,
    "routes": [
        {
            "name": "Elephant & Castle  &harr;  Harrow & Wealdstone",
            "naptanIds": [
                "940GZZLUEAC",
                "940GZZLULBN",
                "940GZZLUWLO",
                "940GZZLUEMB",
                "940GZZLUCHX",
                "940GZZLUPCC",
                "940GZZLUOXC",
                "940GZZLURGP",
                "940GZZLUBST",
                "940GZZLUMYB",
                "940GZZLUERB",
                "940GZZLUPAC",
                "940GZZLUWKA",
                "940GZZLUMVL",
                "940GZZLUKPK",
                "940GZZLUQPS",
                "940GZZLUKSL",
                "940GZZLUWJN",
                "940GZZLUHSN",
                "940GZZLUSGP",
                "940GZZLUWYC",
                "940GZZLUNWY",
                "940GZZLUSKT",
                "940GZZLUKEN",
                "940GZZLUHAW"
            ],
            "serviceType": "Regular",
            "departure": "Elephant & Castle",
            "destination": "Harrow & Wealdstone"
        },
        {
            "name": "Harrow & Wealdstone  &harr;  Elephant & Castle",
            "naptanIds": [
                "940GZZLUHAW",
                "940GZZLUKEN",
                "940GZZLUSKT",
                "940GZZLUNWY",
                "940GZZLUWYC",
                "940GZZLUSGP",
                "940GZZLUHSN",
                "940GZZLUWJN",
                "940GZZLUKSL",
                "940GZZLUQPS",
                "940GZZLUKPK",
                "940GZZLUMVL",
                "940GZZLUWKA",
                "940GZZLUPAC",
                "940GZZLUERB",
                "940GZZLUMYB",
                "940GZZLUBST",
                "940GZZLURGP",
                "940GZZLUOXC",
                "940GZZLUPCC",
                "940GZZLUCHX",
                "940GZZLUEMB",
                "940GZZLUWLO",
                "940GZZLULBN",
                "940GZZLUEAC"
            ],
            "serviceType": "Regular",
            "departure": "Harrow & Wealdstone",
            "destination": "Elephant & Castle"
        }
    ]
}
```

## Station

### Get Specific Station

**Endpoint:** /api/station/search

**Description:** Use this endpoint to search for a specific station by station name or station id.

**HTTP Method:** `GET`

**Request Parameters:**

| Parameter | Type   | Required                              | Description                        |
| --------- | ------ | ------------------------------------- | ---------------------------------- |
| `station` | string | YES (`station` or `id` must have one) | The name of the station to search. |
| `id`      | string | YES (`station` or `id` must have one) | The ID of the station to search.   |

**Response Format:**

The API will return a JSON object containing an array of station objects that match the search criteria. Each station object will include the following fields:

| Field | Type | Description |
| ----- | ---- | ----------- |
|       |      |             |
|       |      |             |

**Example Request:**

`GET https://tube.okis.dev/api/station/search?id=940GZZLUEAC`

**Example Response:**

```json
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": "940GZZLUEAC",
    "name": "Elephant & Castle",
    "coordinates": [-0.099185, 51.494505],
    "zone": "1+2",
    "lines": [
        {
            "name": "Bakerloo"
        },
        {
            "name": "Northern"
        },
        {
            "name": "National Rail"
        }
    ],
    "wifi": true,
    "toilets": false,
    "platforms": [
        {
            "UniqueId": "HUBEPH-Plat01-NB-northern",
            "AccessibleEntranceName": "",
            "CardinalDirection": "Northbound",
            "FriendlyName": "Northbound Platform 1",
            "HasServiceInterchange": "FALSE",
            "IsCustomerFacing": "TRUE",
            "HasStepFreeRouteInformation": "TRUE",
            "PlatformNaptanCode": "9400ZZLUEAC3",
            "PlatformNumber": 1
        },
        {
            "UniqueId": "HUBEPH-Plat01-NB-thameslink",
            "AccessibleEntranceName": "",
            "CardinalDirection": "Northbound",
            "FriendlyName": "Northbound Platform 1",
            "HasServiceInterchange": "FALSE",
            "IsCustomerFacing": "TRUE",
            "HasStepFreeRouteInformation": "FALSE",
            "PlatformNaptanCode": "",
            "PlatformNumber": 1
        },
        {
            "UniqueId": "HUBEPH-Plat02-SB-northern",
            "AccessibleEntranceName": "",
            "CardinalDirection": "Southbound",
            "FriendlyName": "Southbound Platform 2",
            "HasServiceInterchange": "FALSE",
            "IsCustomerFacing": "TRUE",
            "HasStepFreeRouteInformation": "TRUE",
            "PlatformNaptanCode": "9400ZZLUEAC4",
            "PlatformNumber": 2
        },
        {
            "UniqueId": "HUBEPH-Plat02-SB-thameslink",
            "AccessibleEntranceName": "",
            "CardinalDirection": "Southbound",
            "FriendlyName": "Southbound Platform 2",
            "HasServiceInterchange": "FALSE",
            "IsCustomerFacing": "TRUE",
            "HasStepFreeRouteInformation": "FALSE",
            "PlatformNaptanCode": "",
            "PlatformNumber": 2
        },
        {
            "UniqueId": "HUBEPH-Plat03-NB-bakerloo",
            "AccessibleEntranceName": "",
            "CardinalDirection": "Northbound",
            "FriendlyName": "Northbound Platform 3",
            "HasServiceInterchange": "FALSE",
            "IsCustomerFacing": "TRUE",
            "HasStepFreeRouteInformation": "TRUE",
            "PlatformNaptanCode": "9400ZZLUEAC1",
            "PlatformNumber": 3
        },
        {
            "UniqueId": "HUBEPH-Plat03-NB-thameslink",
            "AccessibleEntranceName": "",
            "CardinalDirection": "Northbound",
            "FriendlyName": "Northbound Platform 3",
            "HasServiceInterchange": "FALSE",
            "IsCustomerFacing": "TRUE",
            "HasStepFreeRouteInformation": "FALSE",
            "PlatformNaptanCode": "",
            "PlatformNumber": 3
        },
        {
            "UniqueId": "HUBEPH-Plat04-NB-bakerloo",
            "AccessibleEntranceName": "",
            "CardinalDirection": "Northbound",
            "FriendlyName": "Northbound Platform 4",
            "HasServiceInterchange": "FALSE",
            "IsCustomerFacing": "TRUE",
            "HasStepFreeRouteInformation": "TRUE",
            "PlatformNaptanCode": "9400ZZLUEAC2",
            "PlatformNumber": 4
        },
        {
            "UniqueId": "HUBEPH-Plat04-SB-thameslink",
            "AccessibleEntranceName": "",
            "CardinalDirection": "Southbound",
            "FriendlyName": "Southbound Platform 4",
            "HasServiceInterchange": "FALSE",
            "IsCustomerFacing": "TRUE",
            "HasStepFreeRouteInformation": "FALSE",
            "PlatformNaptanCode": "",
            "PlatformNumber": 4
        }
    ],
    "checked": false,
    "naptan_id": "HUBEPH",
    "modes": ["bus", "national-rail", "tube"]
}
```
