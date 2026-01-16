## Output Format

Return a JSON array with the following structure:

```json
{
  "city": "string",
  "currency": "string",
  "primaryTransportModes": ["string"],
  "transportApps": [
    {
      "name": "string",
      "description": "string",
      "features": ["string"],
      "platforms": {
        "ios": "string (App Store URL)",
        "android": "string (Google Play URL)",
        "web": "string (website URL)"
      },
      "isOfficial": boolean,
      "costInfo": "string"
    }
  ],
  "ticketingInfo": {
    "types": ["string"],
    "purchaseLocations": ["string"],
    "tipicalCosts": {
      "singleRide": "string",
      "dayPass": "string",
      "weeklyPass": "string"
    }
  },
  "travelTips": [
    {
      "title": "string",
      "description": "string"
    }
  ],
  "emergencyInfo": {
    "transportHotline": "string",
    "website": "string"
  }
}

Example Output

{
  "city": "Prague",
  "currency": "CZK",
  "primaryTransportModes": ["Metro", "Tram", "Bus"],
  "transportApps": [
    {
      "name": "PID Lítačka",
      "description": "Official Prague public transport app with tickets, journey planning, and real-time updates",
      "features": ["Buy tickets", "Journey planner", "Real-time departures", "Offline maps"],
      "platforms": {
        "ios": "https://apps.apple.com/app/pid-litacka/id983544853",
        "android": "https://play.google.com/store/apps/details?id=cz.dpp.praguepublictransport",
        "web": "https://app.pidlitacka.cz"
      },
      "isOfficial": true,
      "costInfo": "Free app, pay for tickets within app"
    }
  ],
  "ticketingInfo": {
    "types": ["Single ticket", "24-hour pass", "72-hour pass", "Monthly pass"],
    "purchaseLocations": ["Mobile app", "Metro stations", "Newsagents", "Ticket machines"],
    "tipicalCosts": {
      "singleRide": "30 CZK (90 min)",
      "dayPass": "120 CZK",
      "weeklyPass": "Not available for tourists"
    }
  },
  "travelTips": [
    {
      "title": "Validate your ticket",
      "description": "Always validate paper tickets in yellow machines when boarding"
    },
    {
      "title": "Night transport",
      "description": "Night trams and buses run after midnight with different route numbers"
    }
  ],
  "emergencyInfo": {
    "transportHotline": "+420 296 191 817",
    "website": "https://pid.cz/en"
  }
}
```
