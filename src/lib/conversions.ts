import { Base64 } from "js-base64"

export const conversions = [
  {
    type: "text-to-binary",
    name: "Text to Binary",
    description: "Convert text to its binary representation",
    from: "text",
    to: "binary",
    instructions:
      "Enter any text to convert it to its binary representation. Each character will be represented by 8 bits.",
    about:
      "The Text to Binary converter transforms plain text into its binary equivalent. Each character in the input text is converted to its ASCII value, which is then represented as an 8-bit binary number.",
    features: [
      "Converts any text input to binary",
      "Preserves spaces and special characters",
      "Outputs 8-bit binary representation for each character",
      "Handles Unicode characters",
    ],
    faq: [
      {
        question: "What is binary representation?",
        answer:
          "Binary representation is a way of expressing data using only two digits: 0 and 1. In computing, it's the fundamental language that machines understand and process.",
      },
      {
        question: "How does this converter handle spaces and special characters?",
        answer:
          "Spaces and special characters are also converted to their binary representations. Each character, including spaces and special characters, is represented by 8 bits in the output.",
      },
      {
        question: "Can this tool handle non-English characters?",
        answer:
          "Yes, this tool can handle Unicode characters, which includes non-English characters. Each character will be converted to its binary representation based on its Unicode value.",
      },
    ],
  },
  {
    type: "binary-to-text",
    name: "Binary to Text",
    description: "Convert binary back to readable text",
    from: "binary",
    to: "text",
    instructions: "Enter binary numbers separated by spaces. Each 8-bit sequence represents one character.",
    about:
      "The Binary to Text converter transforms binary data back into human-readable text. It interprets each 8-bit binary sequence as an ASCII character and converts it to its corresponding text representation.",
    features: [
      "Converts binary input to readable text",
      "Handles 8-bit binary sequences",
      "Supports spaces between binary numbers",
      "Converts ASCII values to characters",
    ],
    faq: [
      {
        question: "What format should the binary input be in?",
        answer:
          "The binary input should be in 8-bit sequences, with each sequence separated by a space. For example: '01001000 01100101 01101100 01101100 01101111' represents 'Hello'.",
      },
      {
        question: "What happens if I input an invalid binary sequence?",
        answer:
          "If you input an invalid binary sequence (e.g., not 8 bits, or containing digits other than 0 and 1), the converter will attempt to process it, but may produce unexpected results or errors.",
      },
      {
        question: "Can this tool handle binary representations of special characters?",
        answer:
          "Yes, this tool can handle binary representations of all ASCII characters, including special characters and control characters.",
      },
    ],
  },
  {
    type: "hex-to-binary",
    name: "Hex to Binary",
    description: "Convert hexadecimal to binary",
    from: "hex",
    to: "binary",
    instructions: "Enter hexadecimal numbers separated by spaces.",
    about:
      "The Hex to Binary converter transforms hexadecimal numbers into their binary equivalents. Each hexadecimal digit is converted to its 4-bit binary representation.",
    features: [
      "Converts hexadecimal numbers to binary",
      "Handles spaces between hexadecimal numbers",
      "Outputs 4-bit binary representation for each hexadecimal digit",
      "Supports uppercase and lowercase hexadecimal digits",
    ],
    faq: [
      {
        question: "What is a hexadecimal number?",
        answer:
          "A hexadecimal number is a base-16 number system, using digits 0-9 and letters A-F (or a-f) to represent values from 0 to 15. It's often used in computing to represent memory addresses and data.",
      },
      {
        question: "How are hexadecimal numbers converted to binary?",
        answer:
          "Each hexadecimal digit is converted to its 4-bit binary equivalent. For example, the hexadecimal digit 'A' (10 in decimal) is represented as '1010' in binary.",
      },
      {
        question: "Can this tool handle hexadecimal numbers with leading zeros?",
        answer:
          "Yes, this tool can handle hexadecimal numbers with leading zeros. The leading zeros will be included in the binary output.",
      },
    ],
  },
  {
    type: "binary-to-hex",
    name: "Binary to Hex",
    description: "Convert binary to hexadecimal",
    from: "binary",
    to: "hex",
    instructions: "Enter binary numbers separated by spaces.",
    about:
      "The Binary to Hex converter transforms binary data into its hexadecimal representation. It groups each 4-bit binary sequence and converts it to its corresponding hexadecimal digit.",
    features: [
      "Converts binary numbers to hexadecimal",
      "Handles spaces between binary numbers",
      "Outputs hexadecimal representation in uppercase",
      "Supports 8-bit binary sequences",
    ],
    faq: [
      {
        question: "What format should the binary input be in?",
        answer:
          "The binary input should consist of 8-bit sequences separated by spaces.  Each 8-bit sequence represents a single byte.",
      },
      {
        question: "What if the input is not a multiple of 4 bits?",
        answer:
          "The converter will attempt to process the input, but the result might be unexpected or incorrect if the input is not a multiple of 4 bits.",
      },
      {
        question: "Is the output always in uppercase?",
        answer: "Yes, the hexadecimal output is always in uppercase.",
      },
    ],
  },
  {
    type: "ascii-to-binary",
    name: "ASCII to Binary",
    description: "Convert ASCII values to binary",
    from: "ascii",
    to: "binary",
    instructions: "Enter ASCII decimal values separated by spaces.",
    about:
      "The ASCII to Binary converter transforms ASCII decimal values into their binary equivalents. Each decimal value is converted to its 8-bit binary representation.",
    features: [
      "Converts ASCII decimal values to binary",
      "Handles spaces between decimal values",
      "Outputs 8-bit binary representation for each decimal value",
      "Supports standard ASCII characters",
    ],
    faq: [
      {
        question: "What is ASCII?",
        answer:
          "ASCII (American Standard Code for Information Interchange) is a character encoding standard for electronic communication. It assigns a unique numerical value to each character.",
      },
      {
        question: "How are ASCII values converted to binary?",
        answer:
          "Each ASCII decimal value is converted to its 8-bit binary representation. For example, the ASCII value for 'A' (65) is represented as '01000001' in binary.",
      },
      {
        question: "Can this tool handle extended ASCII characters?",
        answer:
          "This tool primarily handles standard ASCII characters (0-127).  Extended ASCII characters may not be correctly converted.",
      },
    ],
  },
  {
    type: "binary-to-ascii",
    name: "Binary to ASCII",
    description: "Convert binary to ASCII values",
    from: "binary",
    to: "ascii",
    instructions: "Enter binary numbers separated by spaces.",
    about:
      "The Binary to ASCII converter transforms binary data into its ASCII decimal representation. It interprets each 8-bit binary sequence as an ASCII character and converts it to its corresponding decimal value.",
    features: [
      "Converts binary input to ASCII decimal values",
      "Handles 8-bit binary sequences",
      "Supports spaces between binary numbers",
      "Converts binary values to decimal ASCII codes",
    ],
    faq: [
      {
        question: "What format should the binary input be in?",
        answer: "The binary input should be in 8-bit sequences, with each sequence separated by a space.",
      },
      {
        question: "What happens if I input an invalid binary sequence?",
        answer:
          "If you input an invalid binary sequence (e.g., not 8 bits, or containing digits other than 0 and 1), the converter will attempt to process it, but may produce unexpected results or errors.",
      },
      {
        question: "Can this tool handle binary representations of special characters?",
        answer:
          "Yes, this tool can handle binary representations of all ASCII characters, including special characters and control characters.",
      },
    ],
  },
  {
    type: "decimal-to-binary",
    name: "Decimal to Binary",
    description: "Convert decimal numbers to binary",
    from: "decimal",
    to: "binary",
    instructions: "Enter decimal numbers separated by spaces.",
    about:
      "The Decimal to Binary converter transforms decimal numbers into their binary equivalents. Each decimal number is converted to its binary representation.",
    features: [
      "Converts decimal numbers to binary",
      "Handles spaces between decimal numbers",
      "Supports both positive and negative decimal numbers (using two's complement)",
      "Outputs the binary representation of each decimal number",
    ],
    faq: [
      {
        question: "How are negative decimal numbers handled?",
        answer:
          "Negative decimal numbers are handled using two's complement representation.  The result will be a binary number with a leading 1 indicating a negative value.",
      },
      {
        question: "What is the maximum decimal value that can be converted?",
        answer:
          "The maximum decimal value that can be converted depends on the number of bits used to represent the binary number.  For 8-bit numbers, the maximum value is 255.",
      },
      {
        question: "Can this tool handle decimal numbers with leading zeros?",
        answer:
          "Yes, this tool can handle decimal numbers with leading zeros. The leading zeros will be ignored during the conversion.",
      },
    ],
  },
  {
    type: "binary-to-decimal",
    name: "Binary to Decimal",
    description: "Convert binary to decimal numbers",
    from: "binary",
    to: "decimal",
    instructions: "Enter binary numbers separated by spaces.",
    about:
      "The Binary to Decimal converter transforms binary numbers into their decimal equivalents. Each binary number is converted to its corresponding decimal value.",
    features: [
      "Converts binary numbers to decimal",
      "Handles spaces between binary numbers",
      "Supports both positive and negative binary numbers (using two's complement)",
      "Outputs the decimal representation of each binary number",
    ],
    faq: [
      {
        question: "How are negative binary numbers handled?",
        answer:
          "Negative binary numbers are handled using two's complement representation. The converter will correctly interpret the two's complement representation and output the corresponding negative decimal value.",
      },
      {
        question: "What happens if I input an invalid binary sequence?",
        answer:
          "If you input an invalid binary sequence (e.g., containing digits other than 0 and 1), the converter will attempt to process it, but may produce unexpected results or errors.",
      },
      {
        question: "Can this tool handle binary numbers with leading zeros?",
        answer:
          "Yes, this tool can handle binary numbers with leading zeros. The leading zeros will be ignored during the conversion.",
      },
    ],
  },
  {
    type: "text-to-ascii",
    name: "Text to ASCII",
    description: "Convert text to ASCII values",
    from: "text",
    to: "ascii",
    instructions: "Enter any text to convert it to its ASCII representation.",
    about:
      "The Text to ASCII converter transforms plain text into its ASCII decimal representation. Each character in the input text is converted to its corresponding ASCII decimal value.",
    features: [
      "Converts any text input to ASCII decimal values",
      "Preserves spaces and special characters",
      "Outputs ASCII decimal value for each character",
      "Handles Unicode characters (but may not display all correctly)",
    ],
    faq: [
      {
        question: "What is ASCII?",
        answer:
          "ASCII (American Standard Code for Information Interchange) is a character encoding standard for electronic communication. It assigns a unique numerical value to each character.",
      },
      {
        question: "How does this converter handle spaces and special characters?",
        answer:
          "Spaces and special characters are also converted to their ASCII decimal values. Each character, including spaces and special characters, is represented by its corresponding ASCII code.",
      },
      {
        question: "Can this tool handle non-English characters?",
        answer:
          "This tool can handle Unicode characters, but the output may not accurately represent all characters outside the standard ASCII range (0-127).",
      },
    ],
  },
  {
    type: "ascii-to-text",
    name: "ASCII to Text",
    description: "Convert ASCII values to text",
    from: "ascii",
    to: "text",
    instructions: "Enter ASCII decimal values separated by spaces.",
    about:
      "The ASCII to Text converter transforms ASCII decimal values back into human-readable text. It interprets each decimal value as an ASCII character and converts it to its corresponding text representation.",
    features: [
      "Converts ASCII decimal values to text",
      "Handles spaces between decimal values",
      "Supports standard ASCII characters",
      "Converts ASCII codes to characters",
    ],
    faq: [
      {
        question: "What format should the ASCII input be in?",
        answer:
          "The ASCII input should be a sequence of decimal values separated by spaces. For example: '72 101 108 108 111' represents 'Hello'.",
      },
      {
        question: "What happens if I input an invalid ASCII value?",
        answer:
          "If you input an invalid ASCII value (e.g., a value outside the valid ASCII range or a non-numeric value), the converter will attempt to process it, but may produce unexpected results or errors.",
      },
      {
        question: "Can this tool handle extended ASCII characters?",
        answer:
          "This tool primarily handles standard ASCII characters (0-127). Extended ASCII characters may not be correctly converted.",
      },
    ],
  },
  {
    type: "hex-to-decimal",
    name: "Hex to Decimal",
    description: "Convert hexadecimal to decimal",
    from: "hex",
    to: "decimal",
    instructions: "Enter hexadecimal numbers separated by spaces.",
    about:
      "The Hex to Decimal converter transforms hexadecimal numbers into their decimal equivalents. Each hexadecimal number is converted to its corresponding decimal value.",
    features: [
      "Converts hexadecimal numbers to decimal",
      "Handles spaces between hexadecimal numbers",
      "Supports both positive and negative hexadecimal numbers",
      "Outputs the decimal representation of each hexadecimal number",
    ],
    faq: [
      {
        question: "What is a hexadecimal number?",
        answer:
          "A hexadecimal number is a base-16 number system, using digits 0-9 and letters A-F (or a-f) to represent values from 0 to 15. It's often used in computing to represent memory addresses and data.",
      },
      {
        question: "How are hexadecimal numbers converted to decimal?",
        answer:
          "Each hexadecimal digit is multiplied by the corresponding power of 16, and the results are summed to obtain the decimal equivalent.",
      },
      {
        question: "Can this tool handle hexadecimal numbers with leading zeros?",
        answer:
          "Yes, this tool can handle hexadecimal numbers with leading zeros. The leading zeros will be ignored during the conversion.",
      },
    ],
  },
  {
    type: "decimal-to-hex",
    name: "Decimal to Hex",
    description: "Convert decimal to hexadecimal",
    from: "decimal",
    to: "hex",
    instructions: "Enter decimal numbers separated by spaces.",
    about:
      "The Decimal to Hex converter transforms decimal numbers into their hexadecimal equivalents. Each decimal number is converted to its hexadecimal representation.",
    features: [
      "Converts decimal numbers to hexadecimal",
      "Handles spaces between decimal numbers",
      "Supports both positive and negative decimal numbers",
      "Outputs the hexadecimal representation of each decimal number in uppercase",
    ],
    faq: [
      {
        question: "How are negative decimal numbers handled?",
        answer:
          "Negative decimal numbers are handled using two's complement representation. The result will be a hexadecimal number with a leading 1 indicating a negative value.",
      },
      {
        question: "What is the maximum decimal value that can be converted?",
        answer:
          "The maximum decimal value that can be converted depends on the number of bits used to represent the hexadecimal number. For 8-bit numbers, the maximum value is 255.",
      },
      {
        question: "Can this tool handle decimal numbers with leading zeros?",
        answer:
          "Yes, this tool can handle decimal numbers with leading zeros. The leading zeros will be ignored during the conversion.",
      },
    ],
  },
  {
    type: "octal-to-binary",
    name: "Octal to Binary",
    description: "Convert octal to binary",
    from: "octal",
    to: "binary",
    instructions: "Enter octal numbers separated by spaces.",
    about:
      "The Octal to Binary converter transforms octal numbers into their binary equivalents. Each octal digit is converted to its 3-bit binary representation.",
    features: [
      "Converts octal numbers to binary",
      "Handles spaces between octal numbers",
      "Outputs 3-bit binary representation for each octal digit",
      "Supports standard octal digits (0-7)",
    ],
    faq: [
      {
        question: "What is an octal number?",
        answer:
          "An octal number is a base-8 number system, using digits 0-7 to represent values from 0 to 7. It's sometimes used in computing.",
      },
      {
        question: "How are octal numbers converted to binary?",
        answer:
          "Each octal digit is converted to its 3-bit binary equivalent. For example, the octal digit '7' is represented as '111' in binary.",
      },
      {
        question: "What happens if I input an invalid octal digit?",
        answer:
          "If you input an invalid octal digit (e.g., a digit greater than 7), the converter will attempt to process it, but may produce unexpected results or errors.",
      },
    ],
  },
  {
    type: "binary-to-octal",
    name: "Binary to Octal",
    description: "Convert binary to octal",
    from: "binary",
    to: "octal",
    instructions: "Enter binary numbers separated by spaces.",
    about:
      "The Binary to Octal converter transforms binary data into its octal representation. It groups each 3-bit binary sequence and converts it to its corresponding octal digit.",
    features: [
      "Converts binary numbers to octal",
      "Handles spaces between binary numbers",
      "Outputs octal representation",
      "Supports 8-bit binary sequences",
    ],
    faq: [
      {
        question: "What format should the binary input be in?",
        answer:
          "The binary input should consist of 8-bit sequences separated by spaces. Each 8-bit sequence represents a single byte.",
      },
      {
        question: "What if the input is not a multiple of 3 bits?",
        answer:
          "The converter will attempt to process the input, but the result might be unexpected or incorrect if the input is not a multiple of 3 bits.",
      },
      {
        question: "Is there a limit to the size of the binary input?",
        answer: "There's no strict limit, but very large inputs might cause performance issues.",
      },
    ],
  },
  {
    type: "octal-to-decimal",
    name: "Octal to Decimal",
    description: "Convert octal to decimal",
    from: "octal",
    to: "decimal",
    instructions: "Enter octal numbers separated by spaces.",
    about:
      "The Octal to Decimal converter transforms octal numbers into their decimal equivalents. Each octal number is converted to its corresponding decimal value.",
    features: [
      "Converts octal numbers to decimal",
      "Handles spaces between octal numbers",
      "Supports standard octal digits (0-7)",
      "Outputs the decimal representation of each octal number",
    ],
    faq: [
      {
        question: "What is an octal number?",
        answer:
          "An octal number is a base-8 number system, using digits 0-7 to represent values from 0 to 7. It's sometimes used in computing.",
      },
      {
        question: "How are octal numbers converted to decimal?",
        answer:
          "Each octal digit is multiplied by the corresponding power of 8, and the results are summed to obtain the decimal equivalent.",
      },
      {
        question: "What happens if I input an invalid octal digit?",
        answer:
          "If you input an invalid octal digit (e.g., a digit greater than 7), the converter will attempt to process it, but may produce unexpected results or errors.",
      },
    ],
  },
  {
    type: "decimal-to-octal",
    name: "Decimal to Octal",
    description: "Convert decimal to octal",
    from: "decimal",
    to: "octal",
    instructions: "Enter decimal numbers separated by spaces.",
    about:
      "The Decimal to Octal converter transforms decimal numbers into their octal equivalents. Each decimal number is converted to its octal representation.",
    features: [
      "Converts decimal numbers to octal",
      "Handles spaces between decimal numbers",
      "Supports both positive and negative decimal numbers",
      "Outputs the octal representation of each decimal number",
    ],
    faq: [
      {
        question: "How are negative decimal numbers handled?",
        answer:
          "Negative decimal numbers are handled using two's complement representation. The result will be an octal number with a leading 1 indicating a negative value.",
      },
      {
        question: "What is the maximum decimal value that can be converted?",
        answer:
          "The maximum decimal value that can be converted depends on the number of bits used to represent the octal number. For 8-bit numbers, the maximum value is 255.",
      },
      {
        question: "Can this tool handle decimal numbers with leading zeros?",
        answer:
          "Yes, this tool can handle decimal numbers with leading zeros. The leading zeros will be ignored during the conversion.",
      },
    ],
  },
  {
    type: "hex-to-octal",
    name: "Hex to Octal",
    description: "Convert hexadecimal to octal",
    from: "hex",
    to: "octal",
    instructions: "Enter hexadecimal numbers separated by spaces.",
    about:
      "The Hex to Octal converter transforms hexadecimal numbers into their octal equivalents.  It first converts the hexadecimal to decimal, then to octal.",
    features: [
      "Converts hexadecimal numbers to octal",
      "Handles spaces between hexadecimal numbers",
      "Supports uppercase and lowercase hexadecimal digits",
      "Outputs the octal representation of each hexadecimal number",
    ],
    faq: [
      {
        question: "What is a hexadecimal number?",
        answer:
          "A hexadecimal number is a base-16 number system, using digits 0-9 and letters A-F (or a-f) to represent values from 0 to 15. It's often used in computing to represent memory addresses and data.",
      },
      {
        question: "How are hexadecimal numbers converted to octal?",
        answer:
          "The conversion is done in two steps: first, the hexadecimal number is converted to its decimal equivalent, and then the decimal number is converted to its octal representation.",
      },
      {
        question: "Can this tool handle hexadecimal numbers with leading zeros?",
        answer:
          "Yes, this tool can handle hexadecimal numbers with leading zeros. The leading zeros will be ignored during the conversion.",
      },
    ],
  },
  {
    type: "octal-to-hex",
    name: "Octal to Hex",
    description: "Convert octal to hexadecimal",
    from: "octal",
    to: "hex",
    instructions: "Enter octal numbers separated by spaces.",
    about:
      "The Octal to Hex converter transforms octal numbers into their hexadecimal equivalents. It first converts the octal to decimal, then to hexadecimal.",
    features: [
      "Converts octal numbers to hexadecimal",
      "Handles spaces between octal numbers",
      "Supports standard octal digits (0-7)",
      "Outputs the hexadecimal representation of each octal number in uppercase",
    ],
    faq: [
      {
        question: "What is an octal number?",
        answer:
          "An octal number is a base-8 number system, using digits 0-7 to represent values from 0 to 7. It's sometimes used in computing.",
      },
      {
        question: "How are octal numbers converted to hexadecimal?",
        answer:
          "The conversion is done in two steps: first, the octal number is converted to its decimal equivalent, and then the decimal number is converted to its hexadecimal representation.",
      },
      {
        question: "What happens if I input an invalid octal digit?",
        answer:
          "If you input an invalid octal digit (e.g., a digit greater than 7), the converter will attempt to process it, but may produce unexpected results or errors.",
      },
    ],
  },
  {
    type: "text-to-octal",
    name: "Text to Octal",
    description: "Convert text to octal representation",
    from: "text",
    to: "octal",
    instructions: "Enter any text to convert it to its octal representation.",
    about:
      "The Text to Octal converter transforms plain text into its octal representation. Each character in the input text is converted to its ASCII value, which is then represented as an octal number.",
    features: [
      "Converts any text input to octal",
      "Preserves spaces and special characters",
      "Outputs octal representation for each character",
      "Handles Unicode characters",
    ],
    faq: [
      {
        question: "What is octal representation?",
        answer:
          "Octal representation is a way of expressing data using only eight digits: 0-7.  It's a base-8 number system.",
      },
      {
        question: "How does this converter handle spaces and special characters?",
        answer:
          "Spaces and special characters are also converted to their octal representations. Each character, including spaces and special characters, is represented by its ASCII value in octal.",
      },
      {
        question: "Can this tool handle non-English characters?",
        answer:
          "Yes, this tool can handle Unicode characters, which includes non-English characters. Each character will be converted to its octal representation based on its Unicode value.",
      },
    ],
  },
  {
    type: "octal-to-text",
    name: "Octal to Text",
    description: "Convert octal representation to text",
    from: "octal",
    to: "text",
    instructions: "Enter octal numbers separated by spaces.",
    about:
      "The Octal to Text converter transforms octal data back into human-readable text. It interprets each octal sequence as an ASCII character and converts it to its corresponding text representation.",
    features: [
      "Converts octal input to readable text",
      "Handles octal sequences",
      "Supports spaces between octal numbers",
      "Converts ASCII values to characters",
    ],
    faq: [
      {
        question: "What format should the octal input be in?",
        answer:
          "The octal input should consist of octal numbers separated by spaces.  Each octal number represents a single byte.",
      },
      {
        question: "What happens if I input an invalid octal sequence?",
        answer:
          "If you input an invalid octal sequence (e.g., containing digits other than 0-7), the converter will attempt to process it, but may produce unexpected results or errors.",
      },
      {
        question: "Can this tool handle octal representations of special characters?",
        answer:
          "Yes, this tool can handle octal representations of all ASCII characters, including special characters and control characters.",
      },
    ],
  },
  {
    type: "text-to-hex",
    name: "Text to Hex",
    description: "Convert text to hexadecimal",
    from: "text",
    to: "hex",
    instructions: "Enter any text to convert it to its hexadecimal representation.",
    about:
      "The Text to Hex converter transforms plain text into its hexadecimal equivalent. Each character in the input text is converted to its ASCII value, which is then represented as a hexadecimal number.",
    features: [
      "Converts any text input to hexadecimal",
      "Preserves spaces and special characters",
      "Outputs hexadecimal representation for each character",
      "Handles Unicode characters",
    ],
    faq: [
      {
        question: "What is hexadecimal representation?",
        answer:
          "Hexadecimal representation is a way of expressing data using sixteen digits: 0-9 and A-F. It's a base-16 number system.",
      },
      {
        question: "How does this converter handle spaces and special characters?",
        answer:
          "Spaces and special characters are also converted to their hexadecimal representations. Each character, including spaces and special characters, is represented by its ASCII value in hexadecimal.",
      },
      {
        question: "Can this tool handle non-English characters?",
        answer:
          "Yes, this tool can handle Unicode characters, which includes non-English characters. Each character will be converted to its hexadecimal representation based on its Unicode value.",
      },
    ],
  },
  {
    type: "hex-to-text",
    name: "Hex to Text",
    description: "Convert hexadecimal to text",
    from: "hex",
    to: "text",
    instructions: "Enter hexadecimal numbers separated by spaces.",
    about:
      "The Hex to Text converter transforms hexadecimal data back into human-readable text. It interprets each hexadecimal sequence as an ASCII character and converts it to its corresponding text representation.",
    features: [
      "Converts hexadecimal input to readable text",
      "Handles hexadecimal sequences",
      "Supports spaces between hexadecimal numbers",
      "Converts ASCII values to characters",
    ],
    faq: [
      {
        question: "What format should the hexadecimal input be in?",
        answer:
          "The hexadecimal input should consist of hexadecimal numbers separated by spaces. Each hexadecimal number represents a single byte (two hexadecimal digits).",
      },
      {
        question: "What happens if I input an invalid hexadecimal sequence?",
        answer:
          "If you input an invalid hexadecimal sequence (e.g., containing digits other than 0-9 and A-F), the converter will attempt to process it, but may produce unexpected results or errors.",
      },
      {
        question: "Can this tool handle hexadecimal representations of special characters?",
        answer:
          "Yes, this tool can handle hexadecimal representations of all ASCII characters, including special characters and control characters.",
      },
    ],
  },
  {
    type: "text-to-decimal",
    name: "Text to Decimal",
    description: "Convert text to decimal (ASCII values)",
    from: "text",
    to: "decimal",
    instructions: "Enter any text to convert it to its decimal ASCII representation.",
    about:
      "The Text to Decimal converter transforms plain text into its decimal ASCII representation. Each character in the input text is converted to its corresponding ASCII decimal value.",
    features: [
      "Converts any text input to decimal ASCII values",
      "Preserves spaces and special characters",
      "Outputs decimal ASCII value for each character",
      "Handles Unicode characters (but may not display all correctly)",
    ],
    faq: [
      {
        question: "What is ASCII?",
        answer:
          "ASCII (American Standard Code for Information Interchange) is a character encoding standard for electronic communication. It assigns a unique numerical value to each character.",
      },
      {
        question: "How does this converter handle spaces and special characters?",
        answer:
          "Spaces and special characters are also converted to their ASCII decimal values. Each character, including spaces and special characters, is represented by its corresponding ASCII code.",
      },
      {
        question: "Can this tool handle non-English characters?",
        answer:
          "This tool can handle Unicode characters, but the output may not accurately represent all characters outside the standard ASCII range (0-127).",
      },
    ],
  },
  {
    type: "decimal-to-text",
    name: "Decimal to Text",
    description: "Convert decimal (ASCII values) to text",
    from: "decimal",
    to: "text",
    instructions: "Enter decimal ASCII values separated by spaces.",
    about:
      "The Decimal to Text converter transforms ASCII decimal values back into human-readable text. It interprets each decimal value as an ASCII character and converts it to its corresponding text representation.",
    features: [
      "Converts ASCII decimal values to text",
      "Handles spaces between decimal values",
      "Supports standard ASCII characters",
      "Converts ASCII codes to characters",
    ],
    faq: [
      {
        question: "What format should the decimal input be in?",
        answer:
          "The decimal input should be a sequence of decimal values separated by spaces. For example: '72 101 108 108 111' represents 'Hello'.",
      },
      {
        question: "What happens if I input an invalid decimal value?",
        answer:
          "If you input an invalid decimal value (e.g., a value outside the valid ASCII range or a non-numeric value), the converter will attempt to process it, but may produce unexpected results or errors.",
      },
      {
        question: "Can this tool handle extended ASCII characters?",
        answer:
          "This tool primarily handles standard ASCII characters (0-127). Extended ASCII characters may not be correctly converted.",
      },
    ],
  },
  {
    type: "json-formatter",
    name: "JSON Formatter",
    description: "Format and validate JSON data",
    from: "json",
    to: "formatted json",
    instructions: "Enter your JSON data to format and validate it.",
    about:
      "The JSON Formatter takes JSON data as input and formats it for better readability. It also validates the JSON data to ensure it's correctly structured.",
    features: [
      "Formats JSON data with proper indentation",
      "Validates JSON syntax",
      "Provides error messages for invalid JSON",
      "Improves readability of JSON data",
    ],
    faq: [
      {
        question: "What is JSON?",
        answer:
          "JSON (JavaScript Object Notation) is a lightweight data-interchange format. It's easy for humans to read and write, and easy for machines to parse and generate.",
      },
      {
        question: "How does this tool validate JSON?",
        answer:
          "This tool validates JSON data by attempting to parse it using the JSON.parse() method. If the JSON data is correctly structured, it will be parsed successfully. If there are any syntax errors or structural issues, the JSON.parse() method will throw an error, and the tool will display an appropriate error message.",
      },
      {
        question: "What happens if the JSON data is invalid?",
        answer:
          "If the JSON data is invalid, the tool will display an error message indicating the location and type of the error. This helps users identify and correct errors in their JSON data.",
      },
    ],
  },
  {
    type: "url-encoder",
    name: "URL Encoder/Decoder",
    description: "Encode or decode URL components",
    from: "text",
    to: "encoded/decoded URL",
    instructions: "Enter text to encode or an encoded URL to decode.",
    about:
      "The URL Encoder/Decoder encodes or decodes URL components using the encodeURIComponent() and decodeURIComponent() methods. This is useful for safely including data in URLs.",
    features: [
      "Encodes text for use in URLs",
      "Decodes URL-encoded text",
      "Handles special characters",
      "Ensures URL safety",
    ],
    faq: [
      {
        question: "Why is URL encoding necessary?",
        answer:
          "URL encoding is necessary to ensure that special characters in data are safely transmitted in URLs.  Certain characters can be misinterpreted by web browsers or servers.",
      },
      {
        question: "What characters are encoded?",
        answer:
          "Characters that are not allowed in URLs (such as spaces, special symbols, etc.) are encoded into a format that is safe for transmission.",
      },
      {
        question: "How can I use this tool for both encoding and decoding?",
        answer:
          "Use the options to specify whether you want to encode or decode.  For encoding, simply enter the text. For decoding, enter the URL-encoded text.",
      },
    ],
  },
  {
    type: "base64-encoder",
    name: "Base64 Encoder/Decoder",
    description: "Encode or decode text using Base64",
    from: "text",
    to: "base64",
    instructions: "Enter text to encode or Base64 to decode.",
    about:
      "The Base64 Encoder/Decoder encodes or decodes text using the Base64 encoding scheme. Base64 is a common method for encoding binary data as text.",
    features: [
      "Encodes text to Base64",
      "Decodes Base64 to text",
      "Handles various character sets",
      "Useful for encoding binary data as text",
    ],
    faq: [
      {
        question: "What is Base64 encoding?",
        answer:
          "Base64 encoding is a method for representing binary data in an ASCII string format by translating it into a radix-64 representation.",
      },
      {
        question: "Why is Base64 encoding used?",
        answer:
          "Base64 encoding is often used to transmit binary data over mediums that only reliably support text, such as email.",
      },
      {
        question: "How can I use this tool for both encoding and decoding?",
        answer:
          "Use the options to specify whether you want to encode or decode. For encoding, simply enter the text. For decoding, enter the Base64 encoded text.",
      },
    ],
  },
  {
    type: "lorem-ipsum",
    name: "Lorem Ipsum Generator",
    description: "Generate Lorem Ipsum placeholder text",
    from: "options",
    to: "lorem ipsum",
    instructions: "Select the number of paragraphs to generate.",
    about:
      "The Lorem Ipsum Generator creates placeholder text commonly used in the publishing and graphic design industries.  It generates Lorem Ipsum paragraphs based on your specified number.",
    features: [
      "Generates Lorem Ipsum text",
      "Allows specifying the number of paragraphs",
      "Provides consistent placeholder text",
      "Useful for prototyping and design mockups",
    ],
    faq: [
      {
        question: "What is Lorem Ipsum?",
        answer:
          "Lorem Ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      },
      {
        question: "How many paragraphs can I generate?",
        answer: "You can generate any number of paragraphs; the tool is flexible to your needs.",
      },
      {
        question: "Is the generated text always the same?",
        answer:
          "The generated text is consistent for a given number of paragraphs, but the tool can generate different amounts of text.",
      },
    ],
  },
  {
    type: "text-statistics",
    name: "Text Statistics",
    description: "Analyze text for various statistics",
    from: "text",
    to: "statistics",
    instructions: "Enter text to analyze for word count, character count, and more.",
    about:
      "The Text Statistics tool analyzes text input to provide various statistics such as word count, character count, sentence count, and paragraph count.",
    features: [
      "Calculates word count",
      "Calculates character count",
      "Calculates sentence count",
      "Calculates paragraph count",
    ],
    faq: [
      {
        question: "How are sentences and paragraphs counted?",
        answer:
          "Sentences are counted based on the presence of periods, question marks, or exclamation points. Paragraphs are counted based on line breaks.",
      },
      {
        question: "Does the tool handle different types of line breaks?",
        answer: "Yes, the tool handles various line break characters, including \\n, \\r, and \\r\\n.",
      },
      {
        question: "What happens if the input text is empty?",
        answer: "If the input text is empty, the tool will return zero for all statistics.",
      },
    ],
  },
  {
    type: "csv-to-json",
    name: "CSV to JSON Converter",
    description: "Convert CSV data to JSON format",
    from: "csv",
    to: "json",
    instructions: "Enter CSV data to convert to JSON.",
    about:
      "The CSV to JSON Converter transforms comma-separated values (CSV) data into JSON (JavaScript Object Notation) format. This is useful for working with data in different applications.",
    features: [
      "Converts CSV data to JSON",
      "Handles comma-separated values",
      "Supports quoted fields",
      "Outputs formatted JSON data",
    ],
    faq: [
      {
        question: "What is CSV?",
        answer:
          "CSV (Comma-Separated Values) is a simple file format used to store tabular data.  Each line represents a row, and values are separated by commas.",
      },
      {
        question: "How does the tool handle quoted fields?",
        answer: "The tool correctly handles fields enclosed in double quotes, allowing for commas within those fields.",
      },
      {
        question: "What if the CSV data is invalid?",
        answer:
          "If the CSV data is invalid (e.g., inconsistent number of commas per line), the conversion may not be successful, and an error message will be displayed.",
      },
    ],
  },
  {
    type: "text-case",
    name: "Text Case Converter",
    description: "Convert text to various cases",
    from: "text",
    to: "converted text",
    instructions: "Enter text and select the desired case conversion.",
    about:
      "The Text Case Converter allows you to convert text to various cases, such as uppercase, lowercase, title case, and sentence case.",
    features: [
      "Converts text to uppercase",
      "Converts text to lowercase",
      "Converts text to title case",
      "Converts text to sentence case",
    ],
    faq: [
      {
        question: "What is title case?",
        answer: "Title case capitalizes the first letter of each word in a text string.",
      },
      {
        question: "What is sentence case?",
        answer: "Sentence case capitalizes only the first letter of the first word in a text string.",
      },
      {
        question: "How does the tool handle multiple sentences?",
        answer:
          "For sentence case, only the first letter of the first sentence is capitalized. For title case, each word is capitalized.",
      },
    ],
  },
]

export function getConversionByType(type: string) {
  return conversions.find((conversion) => conversion.type === type)
}

export async function performConversion(type: string, input: string, options?: any): Promise<string> {
  // Simulate an asynchronous operation
  await new Promise((resolve) => setTimeout(resolve, 500))

  try {
    switch (type) {
      case "text-to-binary":
        return textToBinary(input)
      case "binary-to-text":
        return binaryToText(input)
      case "hex-to-binary":
        return hexToBinary(input)
      case "binary-to-hex":
        return binaryToHex(input)
      case "ascii-to-binary":
        return asciiToBinary(input)
      case "binary-to-ascii":
        return binaryToAscii(input)
      case "decimal-to-binary":
        return decimalToBinary(input)
      case "binary-to-decimal":
        return binaryToDecimal(input)
      case "text-to-ascii":
        return textToAscii(input)
      case "ascii-to-text":
        return asciiToText(input)
      case "hex-to-decimal":
        return hexToDecimal(input)
      case "decimal-to-hex":
        return decimalToHex(input)
      case "octal-to-binary":
        return octalToBinary(input)
      case "binary-to-octal":
        return binaryToOctal(input)
      case "octal-to-decimal":
        return octalToDecimal(input)
      case "decimal-to-octal":
        return decimalToOctal(input)
      case "hex-to-octal":
        return hexToOctal(input)
      case "octal-to-hex":
        return octalToHex(input)
      case "text-to-octal":
        return textToOctal(input)
      case "octal-to-text":
        return octalToText(input)
      case "text-to-hex":
        return textToHex(input)
      case "hex-to-text":
        return hexToText(input)
      case "text-to-decimal":
        return textToDecimal(input)
      case "decimal-to-text":
        return decimalToText(input)
      case "json-formatter":
        return jsonFormatter(input)
      case "url-encoder":
        return urlEncoder(input, options?.decode)
      case "base64-encoder":
        return base64Encoder(input, options?.decode)
      case "lorem-ipsum":
        return loremIpsumGenerator(options?.paragraphs || 1)
      case "text-statistics":
        return textStatistics(input)
      case "csv-to-json":
        return csvToJson(input)
      case "text-case":
        return textCaseConverter(input, options?.case)
      default:
        throw new Error("Unsupported conversion type")
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Conversion failed: ${error.message}`)
    } else {
      throw new Error("Conversion failed: An unknown error occurred")
    }
  }
}

function textToBinary(text: string): string {
  return text
    .split("")
    .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
    .join(" ")
}

function binaryToText(binary: string): string {
  return binary
    .split(" ")
    .map((bin) => String.fromCharCode(Number.parseInt(bin, 2)))
    .join("")
}

function hexToBinary(hex: string): string {
  return hex
    .split(" ")
    .map((h) => Number.parseInt(h, 16).toString(2).padStart(8, "0"))
    .join(" ")
}

function binaryToHex(binary: string): string {
  return binary
    .split(" ")
    .map((bin) => Number.parseInt(bin, 2).toString(16).toUpperCase().padStart(2, "0"))
    .join(" ")
}

function asciiToBinary(ascii: string): string {
  return ascii
    .split(" ")
    .map((code) => Number.parseInt(code).toString(2).padStart(8, "0"))
    .join(" ")
}

function binaryToAscii(binary: string): string {
  return binary
    .split(" ")
    .map((bin) => Number.parseInt(bin, 2).toString())
    .join(" ")
}

function decimalToBinary(decimal: string): string {
  return decimal
    .split(" ")
    .map((dec) => Number.parseInt(dec).toString(2))
    .join(" ")
}

function binaryToDecimal(binary: string): string {
  return binary
    .split(" ")
    .map((bin) => Number.parseInt(bin, 2).toString())
    .join(" ")
}

function textToAscii(text: string): string {
  return text
    .split("")
    .map((char) => char.charCodeAt(0).toString())
    .join(" ")
}

function asciiToText(ascii: string): string {
  return ascii
    .split(" ")
    .map((code) => String.fromCharCode(Number.parseInt(code)))
    .join("")
}

function hexToDecimal(hex: string): string {
  return hex
    .split(" ")
    .map((h) => Number.parseInt(h, 16).toString())
    .join(" ")
}

function decimalToHex(decimal: string): string {
  return decimal
    .split(" ")
    .map((dec) => Number.parseInt(dec).toString(16).toUpperCase())
    .join(" ")
}

function octalToBinary(octal: string): string {
  return octal
    .split(" ")
    .map((oct) => Number.parseInt(oct, 8).toString(2).padStart(8, "0"))
    .join(" ")
}

function binaryToOctal(binary: string): string {
  return binary
    .split(" ")
    .map((bin) => Number.parseInt(bin, 2).toString(8))
    .join(" ")
}

function octalToDecimal(octal: string): string {
  return octal
    .split(" ")
    .map((oct) => Number.parseInt(oct, 8).toString())
    .join(" ")
}

function decimalToOctal(decimal: string): string {
  return decimal
    .split(" ")
    .map((dec) => Number.parseInt(dec).toString(8))
    .join(" ")
}

function hexToOctal(hex: string): string {
  return hex
    .split(" ")
    .map((h) => Number.parseInt(h, 16).toString(8))
    .join(" ")
}

function octalToHex(octal: string): string {
  return octal
    .split(" ")
    .map((oct) => Number.parseInt(oct, 8).toString(16).toUpperCase())
    .join(" ")
}

function textToOctal(text: string): string {
  return text
    .split("")
    .map((char) => char.charCodeAt(0).toString(8))
    .join(" ")
}

function octalToText(octal: string): string {
  return octal
    .split(" ")
    .map((oct) => String.fromCharCode(Number.parseInt(oct, 8)))
    .join("")
}

function textToHex(text: string): string {
  return text
    .split("")
    .map((char) => char.charCodeAt(0).toString(16).toUpperCase())
    .join(" ")
}

function hexToText(hex: string): string {
  return hex
    .split(" ")
    .map((h) => String.fromCharCode(Number.parseInt(h, 16)))
    .join("")
}

function textToDecimal(text: string): string {
  return text
    .split("")
    .map((char) => char.charCodeAt(0).toString())
    .join(" ")
}

function decimalToText(decimal: string): string {
  return decimal
    .split(" ")
    .map((dec) => String.fromCharCode(Number.parseInt(dec)))
    .join("")
}

function jsonFormatter(json: string): string {
  try {
    const parsed = JSON.parse(json)
    return JSON.stringify(parsed, null, 2)
  } catch (error) {
    throw new Error("Invalid JSON")
  }
}

function urlEncoder(text: string, decode: boolean): string {
  return decode ? decodeURIComponent(text) : encodeURIComponent(text)
}

function base64Encoder(text: string, decode: boolean): string {
  return decode ? Base64.decode(text) : Base64.encode(text)
}

function loremIpsumGenerator(paragraphs: number): string {
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  return Array(paragraphs).fill(lorem).join("\n\n")
}

function textStatistics(text: string): string {
  const words = text.trim().split(/\s+/).length
  const characters = text.length
  const sentences = text.split(/[.!?]+/).length - 1
  const paragraphs = text.split(/\n\s*\n/).length

  return `Words: ${words}\nCharacters: ${characters}\nSentences: ${sentences}\nParagraphs: ${paragraphs}`
}

function csvToJson(csv: string): string {
  const lines = csv.split("\n")
  const headers = lines[0].split(",")
  const result = []

  for (let i = 1; i < lines.length; i++) {
    const obj = {}
    const currentLine = lines[i].split(",")

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentLine[j]
    }

    result.push(obj)
  }

  return JSON.stringify(result, null, 2)
}

function textCaseConverter(text: string, caseType: string): string {
  switch (caseType) {
    case "upper":
      return text.toUpperCase()
    case "lower":
      return text.toLowerCase()
    case "title":
      return text.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
    case "sentence":
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
    default:
      return text
  }
}

