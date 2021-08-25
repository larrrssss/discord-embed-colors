# Discord Embed Colors

Package to quickly get colors for Discord embeds

## Install

```sh
npm install discord-embed-colors
```

## Usage

```javascript
import { getColor } from 'discord-embed-colors';
import { MessageEmbed } from 'discord.js';

new MessageEmbed()
  .setTitle('My cool Embed')
  .setColor(getColor('GREEN'));

// Or convert your own custom hexadecimal code
import { hexToDecimal } from 'discord-embed-colors';

hexToDecimal('#2ecc71'); // 3066993
```
