// created a function similar to the original 
// lib c function to check what is the operator

int		strcmp(const char *s1, const char *s2)
{
	unsigned int i;

	i = 0;
	while (((unsigned char)s1[i] || (unsigned char)s2[i]) &&
			(unsigned char)s1[i] == (unsigned char)s2[i])
		i++;
	//retun 0 if equal
	return ((unsigned char)s1[i] - (unsigned char)s2[i]);
}

// do the math
double arithmetic(double a, double b, char* operator) {
	if (strcmp(operator, "add") == 0)
		return (a + b);
	else if (strcmp(operator, "subtract") == 0)
		return (a - b);
	else if (strcmp(operator, "divide") == 0)
		return (a / b);
	else if (strcmp(operator, "multiply") == 0)
		return (a * b);
}
