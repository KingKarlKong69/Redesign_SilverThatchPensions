# Anahaw Image Setup

## Required Image

Place your **anahaw palm tree leaf image** in this directory with the filename:

```
anahaw.jpg
```

## Image Requirements

- **Filename:** `anahaw.jpg` (exactly)
- **Location:** `assets/images/anahaw.jpg`
- **Recommended dimensions:** 1920x1080 or higher
- **Format:** JPG, JPEG, or PNG (rename to .jpg)
- **Aspect ratio:** 16:9 or similar landscape orientation

## Current Setup

The CSS is configured to use:
```css
background-image: url('../assets/images/anahaw.jpg');
```

## If You Use a Different Filename or Format

If your image has a different name (e.g., `pngtree-anahaw-palm-tree-leaf-image_16509055.jpg`), you have two options:

### Option 1: Rename your file to `anahaw.jpg`
```powershell
# Example for Windows PowerShell:
Rename-Item "pngtree-anahaw-palm-tree-leaf-image_16509055.jpg" "anahaw.jpg"
```

### Option 2: Update the CSS
Edit `css/style.css` and change line 79:
```css
/* FROM: */
background-image: url('../assets/images/anahaw.jpg');

/* TO: */
background-image: url('../assets/images/your-actual-filename.jpg');
```

## Temporary Placeholder

Until you add your image, the left side will show a solid color. The layout and functionality will work perfectly once the image is in place.
