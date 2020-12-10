<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body>
<ol>
<li>ФИО</li>
<li>Стаж работы (год)</li>
</ol>
<xsl:for-each select="JOB/PERSON">
<ul>
<xsl:choose>
<xsl:when test="YEAR = 3">
<li>
  <i>
<xsl:value-of select="NAME"/>
</i>
</li>
</xsl:when>
</xsl:choose>
<li>
<xsl:value-of select="YEAR"/>
</li>
</ul>
</xsl:for-each>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
