def create_user(name, email):

    return {
        "first_name": name.split()[0],
        "last_name": name.split()[-1],
        "email": email,
        "email_domain": email.split("@")[-1],
    }


print(create_user("John Doe", "john_doe@gmail.com"))
