Create a PI cryptocurrency exchange rate calculator app.

When user enters the number of PI coins they own,
automatically calculate and display values in these 10 currencies:
USD, EUR, JPY, GBP, CNY, CHF, AUD, CAD, HKD, KRW

Requirements:
- Fetch real-time PI price from CoinGecko API:
  https://api.coingecko.com/api/v3/simple/price?ids=pi-network&vs_currencies=usd
- Fetch real-time exchange rates from:
  https://open.er-api.com/v6/latest/USD
- Auto-refresh every 60 seconds
- Show each currency with its flag emoji and BIS ranking badge
- KRW (Korean Won) highlighted with gold color as a special currency

Design:
- Pi Network purple/gold color theme
- Large π symbol as header icon (gold circle)
- Mobile-friendly 2-column card grid layout
- Show current PI price and last updated time
- Refresh button at the bottom
- Background: dark purple gradient
