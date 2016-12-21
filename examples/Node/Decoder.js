/**
 * Use as payload decoder function.
 *
 * 12 8E 00 21 09 5A
 * 
 * {
 *   "event": "interval",
 *   "battery": 4750,
 *   "light": 33,
 *   "temperature": 23.94
 * }
 */

function Decoder(bytes, port) {
  var decoded = {};

  var ports = {
    1: 'interval',
    2: 'motion',
    3: 'button'
  };

  decoded.event = ports[port];

  decoded.battery = (bytes[0] << 8) + bytes[1];
  decoded.light = (bytes[2] << 8) + bytes[3];
  decoded.temperature = ((bytes[4] << 8) + bytes[5]) / 100;

  return decoded;
}
