// Dexcom Share API integration
class DexcomAPI {
  constructor() {
      this.baseUrl = 'https://share2.dexcom.com/ShareWebServices/Services';
      this.token = null;
  }

  async login(username, password) {
      try {
          const response = await fetch(`${this.baseUrl}/General/LoginPublisherAccountByName`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  accountName: username,
                  password: password,
                  applicationId: 'd89443d2-327c-4a6f-89e5-496bbb0317db'
              })
          });
          
          this.token = await response.text();
          // Remove quotes from token
          this.token = this.token.replace(/"/g, '');
          localStorage.setItem('dexcomToken', this.token);
          return true;
      } catch (error) {
          console.error('Dexcom login failed:', error);
          return false;
      }
  }

  async getLatestReading() {
      if (!this.token) {
          this.token = localStorage.getItem('dexcomToken');
          if (!this.token) {
              throw new Error('Not logged in to Dexcom');
          }
      }

      try {
          const response = await fetch(`${this.baseUrl}/Publisher/ReadPublisherLatestGlucoseValues?sessionId=${this.token}&minutes=1440&maxCount=1`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              }
          });
          
          const data = await response.json();
          if (data && data.length > 0) {
              return {
                  value: data[0].Value,
                  trend: data[0].Trend,
                  timestamp: new Date(data[0].WT).toISOString()
              };
          }
          return null;
      } catch (error) {
          console.error('Failed to fetch Dexcom data:', error);
          return null;
      }
  }

  async getLast24Hours() {
      if (!this.token) {
          this.token = localStorage.getItem('dexcomToken');
          if (!this.token) {
              throw new Error('Not logged in to Dexcom');
          }
      }

      try {
          const response = await fetch(`${this.baseUrl}/Publisher/ReadPublisherLatestGlucoseValues?sessionId=${this.token}&minutes=1440&maxCount=288`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              }
          });
          
          const data = await response.json();
          return data.map(reading => ({
              value: reading.Value,
              trend: reading.Trend,
              timestamp: new Date(reading.WT).toISOString()
          }));
      } catch (error) {
          console.error('Failed to fetch Dexcom data:', error);
          return [];
      }
  }
}
