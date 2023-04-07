// you can ignore all the files other than this one

#define WHITE 13
#define BLUE 12
#define GREEN 11
#define YELLOW 10

void setup() {
    pinMode(WHITE, INPUT);
    pinMode(BLUE, INPUT);
    pinMode(GREEN, INPUT);
    pinMode(YELLOW, INPUT);

    Serial.begin(9600);
}

void loop() {
    if (digitalRead(WHITE)) {
        Serial.println("WHITE");
    }

    if (digitalRead(BLUE)) {
        Serial.println("BLUE");
    }

    if (digitalRead(GREEN)) {
        Serial.println("GREEN");
    }

    if (digitalRead(YELLOW)) {
        Serial.println("YELLOW");
    }
}
