def distinct(seq):
    output = []
    seen = set()
    for seq in seq:
        if seq not in seen:
            output.append(seq)
            seen.add(seq)
    return output
    pass
