def reverse(st):
    # Your Code Here
    word = ""
    sent = st.replace(" ", " space ")
    sent = sent.split(" ")
    for i in reversed(sent):
        if (i != "space"):
            word += i
        else:
            word += " "
    return word
