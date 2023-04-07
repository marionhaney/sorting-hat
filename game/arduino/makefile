serial_port = /dev/ttyACM0
FQBN = arduino:avr:uno

upload:
	sudo arduino-cli compile -u -b $(FQBN) -p $(serial_port) ./

compile:
	sudo arduino-cli compile -b $(FQBN) -p $(serial_port) ./

list:
	sudo arduino-cli board list

monitor:
	alacritty -e sudo screen $(serial_port) 9600

