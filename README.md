
# Weather App

Bu proje, kullanıcılara dünya çapındaki şehirlerin hava durumu verilerini gösteren bir React uygulamasıdır. Kullanıcılar, şehir adlarını girerek anlık hava durumu bilgilerini öğrenebilirler. Ayrıca, uygulama birkaç varsayılan şehri (İstanbul, Ankara, İzmir, Paris, Sakarya) göstererek, hızlıca hava durumu bilgilerine erişim sağlar.

## Özellikler
- Kullanıcılar, şehir adını girerek hava durumu verilerini öğrenebilirler.
- Hava durumu, sıcaklık, nem oranı ve hava durumu açıklaması gibi bilgileri içerir.
- Birkaç varsayılan şehir (İstanbul, Ankara, İzmir, Paris, Sakarya) için hava durumu verileri otomatik olarak görüntülenir.
- Kullanıcılar, yazarken anlık arama yapabilirler (debounce mekanizması ile).
- Hata mesajları, geçersiz şehir adı girildiğinde veya API çağrısında sorun oluştuğunda görüntülenir.

## Kullanılan Teknolojiler
- **React.js**: UI için kullanılan JavaScript kütüphanesi.
- **TypeScript**: Statik tip denetimi için.
- **OpenWeatherMap API**: Hava durumu verilerini almak için kullanılır.
- **CSS**: Stil ve tasarım için kullanılır.
- **Debounce**: API isteklerinin hızını kontrol etmek için kullanılır.

## Kurulum

### Prerequisites
Bu projeyi çalıştırmak için Node.js ve npm'nin bilgisayarınızda yüklü olması gerekmektedir. Eğer yüklü değilse, [Node.js'i indirin](https://nodejs.org/).

### Adımlar
1. Bu projeyi GitHub'dan klonlayın:
   ```bash
   git clone https://github.com/kullaniciAdi/weather-app.git
   ```

2. Projeye gidin:
   ```bash
   cd weather-app
   ```

3. Gerekli bağımlılıkları yükleyin:
   ```bash
   npm install
   ```

4. Çevresel değişkeni `.env` dosyasına ekleyin (OpenWeatherMap API anahtarınızı almayı unutmayın):
   - `.env` dosyasını proje kök dizininde oluşturun ve şu satırı ekleyin:
     ```
     REACT_APP_API_KEY=your_api_key_here
     ```

5. Uygulamayı başlatın:
   ```bash
   npm start
   ```

6. Tarayıcıda uygulamayı görmek için [http://localhost:3000](http://localhost:3000) adresini ziyaret edin.

## API Kullanımı

Bu uygulama, **OpenWeatherMap API**'sini kullanmaktadır. API anahtarınızı [OpenWeatherMap](https://openweathermap.org/) sitesinden alabilirsiniz. Anahtarınızı `.env` dosyasına ekleyin ve uygulamanın çalışmasını sağlayın.

## Katkı

Katkı sağlamak isterseniz, lütfen aşağıdaki adımları izleyin:

1. Bu depoyu çatallayın (fork).
2. Değişikliklerinizi yeni bir branch üzerinde yapın.
3. Çekme isteği (pull request) gönderin.

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır.
