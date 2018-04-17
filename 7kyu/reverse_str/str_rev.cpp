#include <string>
#include <iostream>
#include <cstdlib>
#include <string.h>

using namespace std ; 

string reverseString (string str )
{
  // your Code is Here ... enjoy !!!
     char *myxl = new char[512];
     
     int ilen = str.length();
     if (ilen > 0)
     {
         myxl[ilen] = 0;
         for (int i = 0;i < ilen; i++) {
             myxl[i] = str[ilen - i - 1];
         }
         string res = (string)myxl;
         delete [] myxl;
         return res;
    } else
        return "";
}
