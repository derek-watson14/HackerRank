# Convert a pace + distance to total time or time + distance to pace
class Time:
  def __init__(self, minutes, seconds):
    self.minutes = minutes
    self.seconds = seconds

def time_to_seconds(time):
  minutes, seconds = time.split(":")
  min_in_sec = int(minutes) * 60
  return int(seconds) + min_in_sec

def seconds_to_formatted(seconds):
  raw_mins = str(round(seconds / 60, 4))
  minutes = raw_mins.split(".")[0]
  raw_secs = round(float(f'0.{raw_mins.split(".")[1]}') * 60)
  seconds = raw_secs if raw_secs > 9 else "0" + str(raw_secs)
  return Time(minutes, seconds)

def convert_time(time, distance, convert_to):
  time_in_sec = time_to_seconds(time)
  if convert_to == "time":
    converted_seconds = round(float(distance) * time_in_sec)
  else:
    converted_seconds = round(time_in_sec / float(distance))
  return seconds_to_formatted(converted_seconds)

def result_string(unit, mode, converted):
  if mode[1] == "Total time":
    return f"Pace per {unit[1]}: {converted.minutes} minutes {converted.seconds} seconds"
  else:
    return f"Total activity time: {converted.minutes} minutes, {converted.seconds} seconds"

def get_user_input():
  mode, unit = [None, None]
  while mode not in ["1", "2"]:
    mode = input("\n~> Choose calculation type:\n1) Pace to total time\n2) Total time to pace\nInput choice: ")
  mode = [">> Pace to total time", "Pace"] if mode == "1" else [">> Total time to pace", "Total time"]
  print(mode[0])

  while unit not in ["1", "2"]:
    unit = input("\n~> Choose unit:\n1) Miles\n2) Kilometers\nInput choice: ")
  unit = [">> Miles", "mile"] if unit == "1" else [">> Kilometers", "kilometer"]
  print(unit[0])


  print(f"\n~> Input time and distance:\nFormat: {mode[1]}: mm:ss | Distance: x.x")
  time = input(f"{mode[1]}: ")
  distance = input(f"Distance ({unit[1]}s): ")
  converted = convert_time(time, distance, mode)
  print(result_string(unit, mode, converted))


def main():
  get_user_input()

if __name__ == "__main__":
  main()