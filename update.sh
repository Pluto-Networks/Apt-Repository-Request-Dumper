rm -r Packages.bz2
rm Packages.gz
rm Packages.xz
dpkg-scanpackages -m debians > Packages
gzip -c9 Packages > Packages.gz
bzip2 -c9 Packages > Packages.bz2
xz -c9 Packages > Packages.xz