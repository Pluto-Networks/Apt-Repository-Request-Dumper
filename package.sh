cd ..
dpkg-scanpackages -m debians/ >Packages
gzip -c9 Packages > Packages.gz
bzip2 -c9 Packages > Packages.bz2