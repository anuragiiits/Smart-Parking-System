from gpiozero import Buzzer
from time import sleep

buzzer = Buzzer(17)

buzzer.on()
print("on")
sleep(1)
buzzer.off()
print("off")
sleep(1)