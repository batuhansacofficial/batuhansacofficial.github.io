# Batuhan Saç - Portfolyo

Türkçe kişisel portfolyo; .NET projeleri, ayrıntılı proje incelemeleri, gerçek uygulama ekranları ve Türkçe/İngilizce CV içerir.

**Site:** https://batuhansac.dev/

## Dosya yapısı

- `index.html`: ana sayfa, proje kartları, CV indirme ve iletişim
- `style.css`: ana sayfanın duyarlı tasarımı
- `case-study.css`: proje inceleme sayfalarının ortak tasarımı
- `app.js`: mobil gezinme, okuma ilerlemesi ve e-posta adresi kopyalama
- `projeler/weather-api-wrapper/`: API, Redis ve HTTP dayanıklılığı incelemesi
- `projeler/unitwise/`: ortak dönüşüm motoru ve web/API incelemesi
- `assets/screenshots/`: uygulamalardan alınan gerçek ekran görüntüleri
- `assets/cv/`: tek sayfalık Türkçe ve İngilizce PDF
- `CONTENT-SOURCES.md`: içerik ve görsellerin kaynakları

Site HTML, CSS ve JavaScript kullanır. Derleme veya paket kurulumu gerekmez. Proje sayfaları ve indirme bağlantıları JavaScript olmadan da açılır.

## Yerel önizleme

Bu dizini statik bir HTTP sunucusuyla sunun. Python yüklüyse:

```sh
python -m http.server 8000
```

Ardından http://localhost:8000/ adresini açın.

## Yayın

GitHub Pages, `main` dalının kök dizinini yayımlar. `.nojekyll` statik dosyaların doğrudan sunulmasını sağlar. `CNAME`, `batuhansac.dev` alan adını tanımlar; `sitemap.xml` ana sayfa ile iki incelemeyi listeler.

## İletişim ve CV

Mesaj bağlantısı, ziyaretçinin e-posta uygulamasını açar. Site mesaj saklamaz. Kopyalama başarısız olursa adresin elle kopyalanabileceğini bildirir. CV dosyaları yalnızca teknik profil, projeler ve profil bağlantılarını içerir. PDF'lerde eğitim, sertifika, işyeri, çalışma tarihi, konum, telefon ve e-posta bilgileri bulunmaz.

WeatherApiWrapper görüntüleri gerçek yerel Swagger oturumlarıdır ve kontrollü sağlayıcı verisi içerir. Unitwise görüntüleri, 8 Kasım 2026 tarihinde canlı uygulamadan alınmıştır. Görsel açıklamaları bu farkı belirtir.
