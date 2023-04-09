// you can ignore all the files other than this one
// 24401

#define DELAY 300

#define WHITE 13
#define BLUE 12
#define GREEN 11
#define YELLOW 10

bool was_high;

void setup() {
  pinMode(WHITE, INPUT);
  pinMode(BLUE, INPUT);
  pinMode(GREEN, INPUT);
  pinMode(YELLOW, INPUT);

  was_high = false;

  Serial.begin(9600);
}

void loop() {
  if (digitalRead(WHITE)) {
    if (!was_high){
      Serial.println("WHITE");
      delay(DELAY);
  }
    was_high = true;
  } else if (digitalRead(BLUE)) {
    if (!was_high){
      Serial.println("BLUE");
      delay(DELAY);
    }
    was_high = true;
  } else if (digitalRead(GREEN)) {
    if (!was_high){
      Serial.println("GREEN");
      delay(DELAY);
    }
    was_high = true;
  } else if (digitalRead(YELLOW)) {
    if (!was_high){
      Serial.println("YELLOW");
      delay(DELAY);
    }
    was_high = true;
  } else {
    //Serial.println("LOW");
    was_high = false;
  }
}
