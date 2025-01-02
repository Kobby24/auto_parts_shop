with open("./models.py", "rb") as f:
    content = f.read()
    print(b"\x00" in content)  # Should return False
