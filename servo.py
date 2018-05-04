import RPi.GPIO as IO
import time
IO.setwarnings(False)
IO.setmode (IO.BCM)
IO.setup(19,IO.OUT)
p = IO.PWM(19,50)
p.start(12.5)
p.ChangeDutyCycle(2.5)
time.sleep(5)
p.ChangeDutyCycle(12.5)
time.sleep(1)