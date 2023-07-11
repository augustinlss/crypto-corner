import urllib.request
import json

url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'

response = urllib.request.urlopen(url)
data = response.read().decode('UTF-8')
file = open("data.json","w")
file.write(data)
new_data = json.loads(data)