<?php

/**
 * As configurações básicas do WordPress
 *
 * O script de criação wp-config.php usa esse arquivo durante a instalação.
 * Você não precisa usar o site, você pode copiar este arquivo
 * para "wp-config.php" e preencher os valores.
 *
 * Este arquivo contém as seguintes configurações:
 *
 * * Configurações do banco de dados
 * * Chaves secretas
 * * Prefixo do banco de dados
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Configurações do banco de dados - Você pode pegar estas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define( 'DB_NAME', 'novaversao' );

/** Usuário do banco de dados MySQL */
define( 'DB_USER', 'root' );

/** Senha do banco de dados MySQL */
define( 'DB_PASSWORD', '' );

/** Nome do host do MySQL */
define( 'DB_HOST', 'localhost' );

/** Charset do banco de dados a ser usado na criação das tabelas. */
define( 'DB_CHARSET', 'utf8mb4' );

/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define( 'DB_COLLATE', '' );

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las
 * usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org
 * secret-key service}
 * Você pode alterá-las a qualquer momento para invalidar quaisquer
 * cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'CQZepLPw%#1lsB4+.M L+d M2nMawaO.]1),7WS _5CS_Uv>%P8Tt:fx<~q_Jp=Q' );
define( 'SECURE_AUTH_KEY',  'dTahMzz&[7}6Qu.D:*rJZ<-#U^wd^,@Ha?DB>`pk)| s8E|^-7o$ ^xuKLfUIyP-' );
define( 'LOGGED_IN_KEY',    'tbA&rf;.L!ma ,W5S2|8-n<^2w~br-nKay0vX* kV,pvR]QL)IMo^p|<PdpQbimd' );
define( 'NONCE_KEY',        'fD|c3/],MUbt E!IsK0X!#Xv&mo@>n]sx7KyK f7kN!dIwQn|-^Y@T4eBfMD=I}J' );
define( 'AUTH_SALT',        ' y4PvKD9?rd(e] 34-9&1[=Ivemi~`-Y Q}6$T~7GUFtIu1G%A=]JOXsuD0N]w1M' );
define( 'SECURE_AUTH_SALT', 'Q2Tu@vHk:B%]`j!zk2^Thk;}>Ic2;P7ga`6<0],EijW:TAE5Lrg9kkE@K-KT{iJb' );
define( 'LOGGED_IN_SALT',   'o6$5P`{j]ueIP=3Bc?J|yU>O_wg {]O/(>O.]9h?]pvnQ{Mk|3Xn5*DRt_<lX=^P' );
define( 'NONCE_SALT',       'SV iLl;89h]Zw2y(!uD:wplrtb!nHcwnZbGkL!!*  6ue(wm3Tj$=0j[X]taX!;A' );

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * um prefixo único para cada um. Somente números, letras e sublinhados!
 */
$table_prefix = 'mm_';

/**
 * Para desenvolvedores: Modo de debug do WordPress.
 *
 * Altere isto para true para ativar a exibição de avisos
 * durante o desenvolvimento. É altamente recomendável que os
 * desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 *
 * Para informações sobre outras constantes que podem ser utilizadas
 * para depuração, visite o Codex.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Adicione valores personalizados entre esta linha até "Isto é tudo". */



/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Configura as variáveis e arquivos do WordPress. */
require_once ABSPATH . 'wp-settings.php';
