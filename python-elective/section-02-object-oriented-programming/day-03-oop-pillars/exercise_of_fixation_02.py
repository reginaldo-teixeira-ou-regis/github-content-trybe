class Contact:
    def __init__(self, name: str, email: str) -> None:
        self.name = name
        self.email = email

    def __str__(self) -> str:
        return f"Name: {self.name}, Email: {self.email}"


class ContactList:
    def __init__(self):
        self.contacts = []
        self.favorites = []

    def add_contact(self, contact: Contact) -> None:
        self.contacts.append(contact)

    def _find_contact(self, name: str, from_favorites=False) -> Contact:
        contact_list = self.favorites if from_favorites else self.contacts

        try:
            contact = [c for c in contact_list if c.name == name][0]
        except IndexError:
            raise LookupError(f"Contact named {name} not found")

        return contact

    def remove_contact(self, name: str) -> None:
        contact = self._find_contact(name)
        self.contacts.remove(contact)
        return contact

    def add_to_favorite(self, name: str) -> None:
        contact = self._find_contact(name)
        self.contacts.remove(contact)
        self.favorites.append(contact)

    def remove_from_favorite(self, name: str) -> None:
        contact = self._find_contact(name, from_favorites=True)
        self.favorites.remove(contact)
        self.contacts.append(contact)

    def __str__(self) -> str:
        contacts_str = "\n".join(str(contact) for contact in self.contacts)
        return f"Contacts:\n{contacts_str}"

    def __str_fav__(self) -> str:
        favorites_str = "\n".join(str(contact) for contact in self.favorites)
        return f"Favorites:\n{favorites_str}"


maria = Contact("Maria", "maria@gmail.com")
antonio = Contact("Antonio", "antonio@gmail.com")
julia = Contact("Julia", "julia@gmail.com")
reginaldo = Contact("Reginaldo", "reginaldo@gmail.com")

contacts = ContactList()

contacts.add_contact(maria)
print(contacts, "\n")

contacts.add_contact(antonio)
contacts.add_contact(julia)
contacts.add_contact(reginaldo)
print(contacts, "\n")

contacts.remove_contact("Julia")
print(contacts, "\n")

contacts.add_to_favorite("Antonio")
print(contacts, "\n")
print(contacts.__str_fav__(), "\n")

contacts.add_to_favorite("Reginaldo")
print(contacts, "\n")
print(contacts.__str_fav__(), "\n")

contacts.remove_from_favorite("Antonio")
print(contacts, "\n")
print(contacts.__str_fav__(), "\n")
