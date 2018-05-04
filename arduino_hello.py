import serial
import commands

s=commands.getstatusoutput('ls /dev/ttyACM*')
s = s[1].split("\n")

ser1 = serial.Serial(s[0], 9600)
ser2 = serial.Serial(s[1], 9600)
print "while"
while(1):
	try:
                f = open("readings.txt", "a")
		a = ser1.readline()
		f.write(a)
		print (a)
		b = ser2.readline()
		f.write(b)
		print (b)
		
##		ser1.write("i am here")
	except Exception	as e:
		ser1 = serial.Serial(s[0], 9600)
		ser2 = serial.Serial(s[1], 9600)
		print e
	