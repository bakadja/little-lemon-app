from PIL import Image

# Ouvrir l'image originale
original = Image.open('restaurantfood.jpg')

# Calculer le nouveau ratio de la hauteur pour le format mobile
new_height_mobile = int((480 / original.width) * original.height)

# Redimensionner l'image pour le mobile
image_mobile = original.resize((480, new_height_mobile))

# Enregistrer l'image redimensionnée
image_mobile.save('restaurantfood_mobile.jpg')