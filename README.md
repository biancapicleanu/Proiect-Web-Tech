# Proiect-Web-Tech
# Tehnologii Web - Aplicație web pentru gestionarea rezolvării bug-urilor

## 1. Structura generală a aplicației
- Single Page Application
- Responsivitate (elementele se redimensioneaza odata cu marirea sau micsorarea dimensiunii paginii - pentru telefon, tableta, desktop)
- Front-end: React.js, Back-end: Node.js RESTful cu ORM (ex. Sequelize) pentru baza de date relațională (ex. MySQL, PostgreSQL)
- Deployment pe server (Azure, AWS)

## 2. Funcționalități și componente principale

### Pagina Principală
- Un titlu pe intreaga pagina si o poza sugestiva
- Aplicatia poate fi utilizata doar dupa autentificare sau dupa ce a fost creat un cont nou deci se sugereaza apasarea butonului care deschide pagina de Log-in/Sign-up

### Pagina Log-in
- Input pentru adresa de email si parola, buton pentru conectare si buton pentru Sign-up
- Daca adresa de email nu este gasita in baza de date atunci se va afisa un mesaj prin care se comunica utilizatorului sa creeze un cont nou. Daca parola nu este corecta se va afisa un mesaj.

### Pagina Sign-up
- Input pentru adresa de email, parola, confirmare parola. Buton pentru creare cont nou.
- Nu se selecteaza rolul. Pot sa fiu si MP si TST in acelasi timp. 

### După logare
- Utilizatorul aplicatiei are optiunea sa fie MP si TST in acelasi timp. El este MP daca este adaugat la un proiect sau mai multe de alti MP. In acelasi timp, el poate sa fie TST pentru alte proiecte. Daca nu a fost adaugat unui proiect de un alt MP poate sa isi creeze propriul proiect si sa fie MP pentru acesta.
- Exista optiunea sa fie vizibile intr-un tabel proiectele active pentru care un utilizator este  TST sau MP. Butoane pentru a crea un proiect nou sau pentru a solicita rolul de tester la un proiect existent. Daca un utilizator este MP, are optiunea sa selecteze un proiect din lista si sa adauge alti utilizatori ca MP la proiect.

## Aplicatia din perspectiva MP

### Pagina de gestionare a proiectelor
- Înregistrarea unui proiect cu URL repository și membrii echipei (adresele de email).
- Vizualizarea proiectelor deja înregistrate cu detalii despre echipa si repozitory.

### Pagina de bug-tracking
- Ca MP, un utilizator poate doar sa vizualizeze lista bug-urilor si poate aloca unul spre rezolvare.
- Exista o lista de bug-uri asociate proiectului curent, fiecare bug avand statusul, severitate, prioritate, descriere si commit-ul asociat. Un bug poate fi atribuit la un moment dat unui singur MP pentru a fi rezolvat.
- Buton “Aloca” pentru MP prin care preia rezolvarea bug-ului.
- Filtrare de bug-uri dupa status, severitate, prioritate.

### Pagina de actualizare bug-uri
- Ca MP dupa ce este rezolvat un bug se poate marca ca si rezolvat si sa fie atasat un link la commit-ul cu rezolvarea.
- Form de actualizare status bug (pentru bug-ul alocat): camp pentru commit si alegerea noului status(“Rezolvat”, “In curs de rezolvare”, “Nerezolvat”)

## Aplicația din perspectiva TST

### Pagina de bug-tracking
- Ca TST, utilizatorul poate inregistra un bug, specificand severitatea, prioritatea, o descriere si un link la commit
- Form de adaugare bug: campuri pentru descriere, severitate, prioritate si link la commit. Pot fi vizualizate bug-urile deja asociate unui proiect dintr-o lista

