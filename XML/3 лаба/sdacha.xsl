<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<head>
  <title> Сдача 3 лабораторной работы XML </title>
</head>
<body>
<xsl:for-each select="SPISOK">
<ul>
  <li> АЗБУКА </li>
    <ol>
      <li> <xsl:value-of select="NAME"/> </li>
      <li> <xsl:value-of select="PASSING"/> </li>
      <li> <xsl:value-of select="YEAR"/> </li>
   </ol>
</ul>
</xsl:for-each>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
