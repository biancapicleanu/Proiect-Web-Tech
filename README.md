# Proiect-Web-Tech
# Tehnologii Web - Aplicație web pentru gestionarea rezolvării bug-urilor

## 1. Structura generală a aplicației
- Single Page Application
- Responsivitate (elementele se redimensionează pentru telefon, tabletă și desktop)
- Front-end: React.js, Back-end: Node.js RESTful cu ORM (ex. Sequelize) pentru baza de date relațională (ex. MySQL, PostgreSQL)
- Deployment pe server (Azure, AWS)

## 2. Funcționalități și componente principale

### Pagina Principală
- Titlu și poză sugestivă.
- Autentificare obligatorie pentru utilizare (Log-in/Sign-up).

### Pagina Log-in
- Input pentru email și parolă, butoane de conectare și de înregistrare.
- Mesaje de eroare pentru cont inexistent sau parolă incorectă.

### Pagina Sign-up
- Input pentru email, parolă și confirmarea parolei, buton de creare cont nou.
- Rolurile sunt alocate automat (MP sau TST).

### După logare
- Utilizatorii pot fi MP și TST simultan.
- Vizualizare proiecte active în care utilizatorul este TST sau MP.
- Creare proiect nou sau solicitare de rol de tester la un proiect existent.

## Aplicatia din perspectiva MP

### Pagina de gestionare a proiectelor
- Înregistrarea unui proiect cu URL repository și membrii echipei.
- Vizualizarea proiectelor deja înregistrate.

### Pagina de bug-tracking
- Vizualizare și alocare bug-uri (status, severitate, prioritate, descriere, commit).
- Filtrare bug-uri după status, severitate, prioritate.

### Pagina de actualizare bug-uri
- Marcare bug ca rezolvat, atașare link commit și actualizare status.

## Aplicația din perspectiva TST

### Pagina de bug-tracking
- Înregistrare bug nou (severitate, prioritate, descriere, commit).
- Vizualizare bug-uri asociate unui proiect.
